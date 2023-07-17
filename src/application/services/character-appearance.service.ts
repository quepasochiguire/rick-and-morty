import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import CharacterAppearance from 'src/domain/models/character-appearance/chracter-appearance.model';
import Paginated from 'src/domain/paginated/paginated.model';
import { PaginationDto } from 'src/domain/paginated/pagination.dto';
import ICharacterAppearanceService from 'src/domain/services/character-appearance.service';
import { CharacterAppearanceEntity } from 'src/infrastructure/repositories/chracter-appearance/chracter-appearance.entity';
import { TYPEORM_CHARACTER_APPEARANCE_REPOSITORY } from 'src/infrastructure/repositories/chracter-appearance/chracter-appearance.providers';
import { Repository } from 'typeorm';

const moment = extendMoment(Moment);

@Injectable()
export class CharacterAppearanceService implements ICharacterAppearanceService {
  constructor(
    @Inject(TYPEORM_CHARACTER_APPEARANCE_REPOSITORY)
    private characterAppearanceRepo: Repository<CharacterAppearanceEntity>,
  ) {}

  async get(id: string): Promise<CharacterAppearance> {
    const appearance = await this.characterAppearanceRepo.findOneOrFail({
      where: {
        id,
      },
    });
    return appearance.toDomain();
  }
  private async getAllCharacterAppearances(
    characterId: string,
    episodeId?: string,
  ): Promise<CharacterAppearance[]> {
    const characterAppearances = await this.characterAppearanceRepo.find({
      where: { characterId, episodeId },
    });
    return characterAppearances.map((c) => c.toDomain());
  }

  async getCharacterAppearances(
    pagination: PaginationDto,
    characterId: string,
    episodeId?: string,
  ): Promise<Paginated<CharacterAppearance>> {
    const { page, limit } = pagination;
    const where = { characterId };
    if (episodeId) Object.assign(where, { episodeId });
    const characterAppearances = await this.characterAppearanceRepo.find({
      where,
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await this.characterAppearanceRepo.count({
      where,
    });
    return new Paginated<CharacterAppearance>({
      data: characterAppearances.map((c) => c.toDomain()),
      total,
      limit,
      page,
      next: page * limit < total ? page + 1 : null,
      previous: page > 1 ? page - 1 : null,
    });
  }

  async save(characterAppearance: CharacterAppearance): Promise<void> {
    await this.validateIfPreviousAppearanceOverlaps(
      characterAppearance,
      characterAppearance.getEpisodeId(),
    );
    const characterAppearanceEntity = this.characterAppearanceRepo.create(
      characterAppearance.getSnapshot(),
    );
    await this.characterAppearanceRepo.save(characterAppearanceEntity);
  }

  async update(characterAppearance: CharacterAppearance): Promise<void> {
    await this.validateIfPreviousAppearanceOverlaps(
      characterAppearance,
      characterAppearance.getEpisodeId(),
    );
    await this.characterAppearanceRepo.update(
      { id: characterAppearance.getId() },
      characterAppearance.getSnapshot(),
    );
  }
  async delete(characterAppearance: CharacterAppearance): Promise<void> {
    const characterAppearanceEntity =
      await this.characterAppearanceRepo.findOneOrFail({
        where: {
          id: characterAppearance.getId(),
        },
      });
    await this.characterAppearanceRepo.remove(characterAppearanceEntity);
  }

  private async validateIfPreviousAppearanceOverlaps(
    characterAppearance: CharacterAppearance,
    episodeId: string,
  ) {
    const previousCharacterAppearances = await this.getAllCharacterAppearances(
      characterAppearance.getCharacterId(),
      episodeId,
    );
    const isOverlapping = previousCharacterAppearances.some((c) => {
      return this.overlaps(c, characterAppearance);
    });
    if (isOverlapping) {
      throw new BadRequestException(
        'Character appearance overlaps with another one',
      );
    }
  }

  private overlaps(
    characterAppearance: CharacterAppearance,
    newCharacterAppearance: CharacterAppearance,
  ): boolean {
    const rangeA = moment.range(
      moment()
        .set('minutes', characterAppearance.getStartMinute())
        .set('seconds', characterAppearance.getStartSecond()),
      moment()
        .set('minutes', characterAppearance.getEndMinute())
        .set('seconds', characterAppearance.getEndSecond()),
    );
    const rangeB = moment.range(
      moment()
        .set('minutes', newCharacterAppearance.getStartMinute())
        .set('seconds', newCharacterAppearance.getStartSecond()),
      moment()
        .set('minutes', newCharacterAppearance.getEndMinute())
        .set('seconds', newCharacterAppearance.getEndSecond()),
    );
    if (rangeA.overlaps(rangeB)) {
      return true;
    }
    return false;
  }
}
