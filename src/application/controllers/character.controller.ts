import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CharacterService } from '../services/character.service';
import CreateCharacterUsecase from '../usecases/character/create-character.usecase';
import { CreateCharacterDto } from '../usecases/character/dto/create-character.dto';
import { GetCharactersDto } from '../usecases/character/dto/get-characters.dto';
import UpdateCharacterUsecase from '../usecases/character/update-character.usecase';
import { UpdateCharacterDto } from '../usecases/character/dto/update-character.dto';
import {
  PaginationDto,
  PaginationDtoTransformOptions,
} from 'src/domain/paginated/pagination.dto';

@Controller('/api/characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async getAllCharacters(
    @Query({ transform: PaginationDtoTransformOptions })
    query: GetCharactersDto & PaginationDto,
  ) {
    const { species, type, page, limit } = query;
    const filters = {};
    if (species) Object.assign(filters, { species });
    if (type) Object.assign(filters, { type });
    const characters = await this.characterService.getCharacters(
      { page, limit },
      filters,
    );
    return {
      ...characters.getSnapshot(),
      data: characters.data.map((c) => c.getSnapshot()),
    };
  }

  @Post()
  async createCharacter(@Body() characterData: CreateCharacterDto) {
    const createCharacterUsecase = new CreateCharacterUsecase(
      this.characterService,
    );
    const character = await createCharacterUsecase.execute(characterData);
    return character.getSnapshot();
  }

  @Patch('/:id/suspend')
  async suspendCharacter(@Param('id') characterId: string) {
    const character = await this.characterService.suspend(characterId);
    return character.getSnapshot();
  }

  @Patch('/:id')
  async updateCharacter(
    @Param('id') characterId: string,
    @Body() characterData: UpdateCharacterDto,
  ) {
    const updateCharacterUsecase = new UpdateCharacterUsecase(
      this.characterService,
    );
    await updateCharacterUsecase.execute(characterId, characterData);
    return { success: true };
  }
}
