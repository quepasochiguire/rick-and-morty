import { CharacterAppearanceService } from 'src/application/services/character-appearance.service';
import CharacterAppearance from 'src/domain/models/character-appearance/chracter-appearance.model';
import AddCharacterAppearanceDto from './dto/add-character-appearance.dto';
declare class AddCharacterAppearanceUsecase {
    private readonly characterAppearanceService;
    constructor(characterAppearanceService: CharacterAppearanceService);
    execute(dto: AddCharacterAppearanceDto): Promise<CharacterAppearance>;
}
export default AddCharacterAppearanceUsecase;
