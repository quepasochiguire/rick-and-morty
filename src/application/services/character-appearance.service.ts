import { Inject, Injectable } from '@nestjs/common';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import CharacterAppearance from 'src/domain/models/character-appearance/chracter-appearance.model';
import ICharacterAppearanceService from 'src/domain/services/character-appearance.service';
import { CharacterAppearanceEntity } from 'src/infrastructure/repositories/chracter-appearance/chracter-appearance.entity';
import { TYPEORM_CHARACTER_APPEARANCE_REPOSITORY } from 'src/infrastructure/repositories/chracter-appearance/chracter-appearance.providers';
import { Repository } from 'typeorm';

const moment = extendMoment(Moment);

@Injectable()
export class CharacterAppearanceService implements ICharacterAppearanceService {
  constructor(
    @Inject(TYPEORM_CHARACTER_APPEARANCE_REPOSITORY)
    private episodeRepository: Repository<CharacterAppearanceEntity>,
  ) {}
  async getCharacterAppearances(
    characterId: string,
  ): Promise<CharacterAppearance[]> {
    const characterAppearances = await this.episodeRepository.find({
      where: { characterId },
    });
    return characterAppearances.map((c) => c.toDomain());
  }

  async save(characterAppearance: CharacterAppearance): Promise<void> {
    await this.validateIfPreviousAppearanceOverlaps(characterAppearance);
    const characterAppearanceEntity = this.episodeRepository.create(
      characterAppearance.getSnapshot(),
    );
    await this.episodeRepository.save(characterAppearanceEntity);
  }

  async update(characterAppearance: CharacterAppearance): Promise<void> {
    await this.validateIfPreviousAppearanceOverlaps(characterAppearance);
    await this.episodeRepository.update(
      { id: characterAppearance.getId() },
      characterAppearance.getSnapshot(),
    );
  }
  async delete(characterAppearance: CharacterAppearance): Promise<void> {
    const characterAppearanceEntity =
      await this.episodeRepository.findOneOrFail({
        where: {
          id: characterAppearance.getId(),
        },
      });
    await this.episodeRepository.remove(characterAppearanceEntity);
  }

  private async validateIfPreviousAppearanceOverlaps(
    characterAppearance: CharacterAppearance,
  ) {
    const previousCharacterAppearances = await this.getCharacterAppearances(
      characterAppearance.getCharacterId(),
    );
    const isOverlapping = previousCharacterAppearances.some((c) => {
      return this.overlaps(c, characterAppearance);
    });
    if (isOverlapping) {
      throw new Error('Character appearance overlaps with another one');
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
