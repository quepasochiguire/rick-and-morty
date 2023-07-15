import { CharacterService } from '../services/character.service';
import { CreateCharacterDto } from '../usecases/character/dto/create-character.dto';
import { GetCharactersDto } from '../usecases/character/dto/get-characters.dto';
import { UpdateCharacterDto } from '../usecases/character/dto/update-character.dto';
import { PaginationDto } from 'src/domain/paginated/pagination.dto';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    getAllCharacters(query: GetCharactersDto & PaginationDto): Promise<{
        data: {
            id: string;
            name: string;
            status: import("../../domain/models/character/character-status.vo").CharacterStatusValue;
            species: string;
            type: string;
            gender: import("../../domain/models/character/character-gender.vo").CharacterGenderValue;
            episode: string[];
            image: string;
        }[];
        total: number;
        page: number;
        limit: number;
        next?: number;
        previous?: number;
    }>;
    createCharacter(characterData: CreateCharacterDto): Promise<{
        id: string;
        name: string;
        status: import("../../domain/models/character/character-status.vo").CharacterStatusValue;
        species: string;
        type: string;
        gender: import("../../domain/models/character/character-gender.vo").CharacterGenderValue;
        episode: string[];
        image: string;
    }>;
    updateCharacter(characterId: string, characterData: UpdateCharacterDto): Promise<{
        success: boolean;
    }>;
    suspendCharacter(characterId: string): Promise<{
        id: string;
        name: string;
        status: import("../../domain/models/character/character-status.vo").CharacterStatusValue;
        species: string;
        type: string;
        gender: import("../../domain/models/character/character-gender.vo").CharacterGenderValue;
        episode: string[];
        image: string;
    }>;
}
