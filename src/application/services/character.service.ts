import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import Character from 'src/domain/models/character/character.model';
import CharacterProps from 'src/domain/models/character/character.props';
import Paginated from 'src/domain/paginated/paginated.model';
import { PaginationDto } from 'src/domain/paginated/pagination.dto';
import { ICharacterService } from 'src/domain/services/character.service';
import { CharacterEntity } from 'src/infrastructure/repositories/character/typeorm/character.entity';
import { TYPEORM_CHARACTER_REPOSITORY } from 'src/infrastructure/repositories/character/typeorm/character.providers';
import { Repository } from 'typeorm';

@Injectable()
export class CharacterService implements ICharacterService {
  constructor(
    @Inject(TYPEORM_CHARACTER_REPOSITORY)
    private characterRepository: Repository<CharacterEntity>,
  ) {}

  async getFilteredCharacters(
    filters: Partial<CharacterProps>,
  ): Promise<Character[]> {
    const character = await this.characterRepository.find({
      where: filters,
    });
    return character?.map((c) => c.toDomain());
  }

  /**
   * @TODO Implement pagination using cleaner code (Ex: Decorators)
   */
  async getCharacters(
    pagination?: PaginationDto,
    filters?: Partial<CharacterProps>,
  ): Promise<Paginated<Character>> {
    const { page, limit } = pagination;
    const character = await this.characterRepository.find({
      where: Object.assign({}, filters),
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await this.characterRepository.count();
    return new Paginated<Character>({
      data: character.map((c) => c.toDomain()),
      total,
      limit,
      page,
      next: page * limit < total ? page + 1 : null,
      previous: page > 1 ? page - 1 : null,
    });
  }

  async getCharacterById(id: string): Promise<Character | null> {
    const character = await this.characterRepository.findOne({ where: { id } });
    return character?.toDomain();
  }

  async save(character: Character): Promise<Character> {
    await this.validateIfCharacterExists(character);
    const characterEntity = this.characterRepository.create(
      character.getSnapshot(),
    );
    await this.characterRepository.save(characterEntity);
    return character;
  }

  async update(
    character: Character,
    validateIfCharacterExists = true,
  ): Promise<Character> {
    if (validateIfCharacterExists) {
      await this.validateIfCharacterExists(character);
    }
    await this.characterRepository.update(
      { id: character.getId() },
      character.getSnapshot(),
    );
    return character;
  }

  async suspend(id: string): Promise<Character> {
    const character = await this.getCharacterById(id);
    character.suspend();
    await this.update(character, false);
    return character;
  }

  async findAll(): Promise<Character[]> {
    const characters = await this.characterRepository.find();
    return characters.map((character) => character.toDomain());
  }

  // A characters already exists if it has the same name, specie and type
  private async validateIfCharacterExists(character: Character): Promise<void> {
    const { name, species, type } = character.getSnapshot();
    const characterExists = await this.getFilteredCharacters({
      name,
      species,
      type,
    });
    if (characterExists.length > 0) {
      throw new BadRequestException('This character already exists');
    }
  }
}
