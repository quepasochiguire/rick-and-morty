import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CharacterAppearanceService } from '../services/character-appearance.service';
import AddCharacterAppearanceDto from '../usecases/character-appearances/dto/add-character-appearance.dto';
import AddCharacterAppearanceUsecase from '../usecases/character-appearances/add-character-appearance.usecase';
import {
  PaginationDto,
  PaginationDtoTransformOptions,
} from 'src/domain/paginated/pagination.dto';
import GetAppearancesDto from '../usecases/character-appearances/dto/get-appearances.dto';
import UpdateCharacterAppearanceUsecase from '../usecases/character-appearances/update-character-appearance.usecase';
import UpdateCharacterAppearanceDto from '../usecases/character-appearances/dto/update-character-appearance.dto';

@Controller('/api/character-appareances')
export class CharacterAppareancesController {
  constructor(
    private readonly characterAppearanceService: CharacterAppearanceService,
  ) {}

  @Post()
  async createCharacterAppearance(@Body() body: AddCharacterAppearanceDto) {
    const addCharacterAppearanceUsecase = new AddCharacterAppearanceUsecase(
      this.characterAppearanceService,
    );
    const characterAppearance = await addCharacterAppearanceUsecase.execute(
      body,
    );
    return characterAppearance.getSnapshot();
  }

  @Patch('/:appearanceId')
  async updateAppearance(
    @Param('appearanceId') appearanceId: string,
    @Body() dto: UpdateCharacterAppearanceDto,
  ) {
    const updateCharacterAppearanceUsecase =
      new UpdateCharacterAppearanceUsecase(this.characterAppearanceService);
    await updateCharacterAppearanceUsecase.execute(appearanceId, dto);
    return { success: true };
  }

  @Delete('/:appearanceId')
  async deleteCharacterAppearance(@Param('appearanceId') appearanceId: string) {
    const appearance = await this.characterAppearanceService.get(appearanceId);
    if (!appearance) throw new NotFoundException('Appearance not found');
    await this.characterAppearanceService.delete(appearance);
    return { success: true };
  }

  @Get('/:characterId')
  async getAllCharacterAppearances(
    @Query({ transform: PaginationDtoTransformOptions })
    query: GetAppearancesDto & PaginationDto,
    @Param('characterId') characterId: string,
  ) {
    const pagination = { limit: query.limit, page: query.page };
    const appearances =
      await this.characterAppearanceService.getCharacterAppearances(
        pagination,
        characterId,
        query.episodeId,
      );
    return {
      ...appearances.getSnapshot(),
      data: appearances.data.map((d) => d.getSnapshot()),
    };
  }
}
