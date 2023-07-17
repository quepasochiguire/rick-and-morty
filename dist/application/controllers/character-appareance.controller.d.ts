import { CharacterAppearanceService } from '../services/character-appearance.service';
import AddCharacterAppearanceDto from '../usecases/character-appearances/dto/add-character-appearance.dto';
import { PaginationDto } from 'src/domain/paginated/pagination.dto';
import GetAppearancesDto from '../usecases/character-appearances/dto/get-appearances.dto';
import UpdateCharacterAppearanceDto from '../usecases/character-appearances/dto/update-character-appearance.dto';
export declare class CharacterAppareancesController {
    private readonly characterAppearanceService;
    constructor(characterAppearanceService: CharacterAppearanceService);
    createCharacterAppearance(body: AddCharacterAppearanceDto): Promise<import("../../domain/models/character-appearance/chracter-appearance.props").CharacterAppearanceProps>;
    updateAppearance(appearanceId: string, dto: UpdateCharacterAppearanceDto): Promise<{
        success: boolean;
    }>;
    deleteCharacterAppearance(appearanceId: string): Promise<{
        success: boolean;
    }>;
    getAllCharacterAppearances(query: GetAppearancesDto & PaginationDto, characterId: string): Promise<{
        data: import("../../domain/models/character-appearance/chracter-appearance.props").CharacterAppearanceProps[];
        total: number;
        page: number;
        limit: number;
        next?: number;
        previous?: number;
    }>;
}
