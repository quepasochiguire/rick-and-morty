"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
const common_1 = require("@nestjs/common");
const paginated_model_1 = require("../../domain/paginated/paginated.model");
const character_providers_1 = require("../../infrastructure/repositories/character/typeorm/character.providers");
const typeorm_1 = require("typeorm");
let CharacterService = exports.CharacterService = class CharacterService {
    constructor(characterRepository) {
        this.characterRepository = characterRepository;
    }
    async getFilteredCharacters(filters) {
        const character = await this.characterRepository.find({
            where: filters,
        });
        return character === null || character === void 0 ? void 0 : character.map((c) => c.toDomain());
    }
    async getCharacters(pagination, filters) {
        const { page, limit } = pagination;
        const character = await this.characterRepository.find({
            where: Object.assign({}, filters),
            take: limit,
            skip: (page - 1) * limit,
        });
        const total = await this.characterRepository.count();
        return new paginated_model_1.default({
            data: character.map((c) => c.toDomain()),
            total,
            limit,
            page,
            next: page * limit < total ? page + 1 : null,
            previous: page > 1 ? page - 1 : null,
        });
    }
    async getCharacterById(id) {
        const character = await this.characterRepository.findOne({ where: { id } });
        return character === null || character === void 0 ? void 0 : character.toDomain();
    }
    async save(character) {
        await this.validateIfCharacterExists(character);
        const characterEntity = this.characterRepository.create(character.getSnapshot());
        await this.characterRepository.save(characterEntity);
        return character;
    }
    async update(character, validateIfCharacterExists = true) {
        if (validateIfCharacterExists) {
            await this.validateIfCharacterExists(character);
        }
        await this.characterRepository.update({ id: character.getId() }, character.getSnapshot());
        return character;
    }
    async suspend(id) {
        const character = await this.getCharacterById(id);
        character.suspend();
        await this.update(character, false);
        return character;
    }
    async findAll() {
        const characters = await this.characterRepository.find();
        return characters.map((character) => character.toDomain());
    }
    async validateIfCharacterExists(character) {
        const { name, species, type } = character.getSnapshot();
        const characterExists = await this.getFilteredCharacters({
            name,
            species,
            type,
        });
        if (characterExists.length > 0) {
            throw new common_1.BadRequestException('This character already exists');
        }
    }
};
exports.CharacterService = CharacterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(character_providers_1.TYPEORM_CHARACTER_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CharacterService);
//# sourceMappingURL=character.service.js.map