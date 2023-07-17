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
exports.CharacterController = void 0;
const common_1 = require("@nestjs/common");
const character_service_1 = require("../services/character.service");
const create_character_usecase_1 = require("../usecases/character/create-character.usecase");
const create_character_dto_1 = require("../usecases/character/dto/create-character.dto");
const update_character_usecase_1 = require("../usecases/character/update-character.usecase");
const update_character_dto_1 = require("../usecases/character/dto/update-character.dto");
const pagination_dto_1 = require("../../domain/paginated/pagination.dto");
let CharacterController = exports.CharacterController = class CharacterController {
    constructor(characterService) {
        this.characterService = characterService;
    }
    async getAllCharacters(query) {
        const { species, type, page, limit } = query;
        const filters = {};
        if (species)
            Object.assign(filters, { species });
        if (type)
            Object.assign(filters, { type });
        const characters = await this.characterService.getCharacters({ page, limit }, filters);
        return Object.assign(Object.assign({}, characters.getSnapshot()), { data: characters.data.map((c) => c.getSnapshot()) });
    }
    async createCharacter(characterData) {
        const createCharacterUsecase = new create_character_usecase_1.default(this.characterService);
        const character = await createCharacterUsecase.execute(characterData);
        return character.getSnapshot();
    }
    async suspendCharacter(characterId) {
        const character = await this.characterService.suspend(characterId);
        return character.getSnapshot();
    }
    async updateCharacter(characterId, characterData) {
        const updateCharacterUsecase = new update_character_usecase_1.default(this.characterService);
        await updateCharacterUsecase.execute(characterId, characterData);
        return { success: true };
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)({ transform: pagination_dto_1.PaginationDtoTransformOptions })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "getAllCharacters", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_dto_1.CreateCharacterDto]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "createCharacter", null);
__decorate([
    (0, common_1.Patch)('/:id/suspend'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "suspendCharacter", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_character_dto_1.UpdateCharacterDto]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "updateCharacter", null);
exports.CharacterController = CharacterController = __decorate([
    (0, common_1.Controller)('/api/characters'),
    __metadata("design:paramtypes", [character_service_1.CharacterService])
], CharacterController);
//# sourceMappingURL=character.controller.js.map