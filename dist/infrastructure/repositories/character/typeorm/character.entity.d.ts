import Character from 'src/domain/models/character/character.model';
export declare class CharacterEntity {
    _id: string;
    id: string;
    name: string;
    status: string;
    type: string;
    species: string;
    gender: string;
    image: string;
    toDomain(): Character;
}
