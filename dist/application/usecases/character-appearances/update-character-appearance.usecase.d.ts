import { CharacterAppearanceService } from 'src/application/services/character-appearance.service';
import UpdateCharacterAppearanceDto from './dto/update-character-appearance.dto';
declare class UpdateCharacterAppearanceUsecase {
    private readonly characterAppearanceService;
    constructor(characterAppearanceService: CharacterAppearanceService);
    execute(id: string, dto: UpdateCharacterAppearanceDto): Promise<import("../../../domain/models/character-appearance/chracter-appearance.model").default>;
}
export default UpdateCharacterAppearanceUsecase;
