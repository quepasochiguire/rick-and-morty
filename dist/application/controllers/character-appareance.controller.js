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
exports.CharacterAppareancesController = void 0;
const common_1 = require("@nestjs/common");
const character_appearance_service_1 = require("../services/character-appearance.service");
const add_character_appearance_dto_1 = require("../usecases/character-appearances/dto/add-character-appearance.dto");
const add_character_appearance_usecase_1 = require("../usecases/character-appearances/add-character-appearance.usecase");
const pagination_dto_1 = require("../../domain/paginated/pagination.dto");
const update_character_appearance_usecase_1 = require("../usecases/character-appearances/update-character-appearance.usecase");
const update_character_appearance_dto_1 = require("../usecases/character-appearances/dto/update-character-appearance.dto");
let CharacterAppareancesController = exports.CharacterAppareancesController = class CharacterAppareancesController {
    constructor(characterAppearanceService) {
        this.characterAppearanceService = characterAppearanceService;
    }
    async createCharacterAppearance(body) {
        const addCharacterAppearanceUsecase = new add_character_appearance_usecase_1.default(this.characterAppearanceService);
        const characterAppearance = await addCharacterAppearanceUsecase.execute(body);
        return characterAppearance.getSnapshot();
    }
    async updateAppearance(appearanceId, dto) {
        const updateCharacterAppearanceUsecase = new update_character_appearance_usecase_1.default(this.characterAppearanceService);
        await updateCharacterAppearanceUsecase.execute(appearanceId, dto);
        return { success: true };
    }
    async deleteCharacterAppearance(appearanceId) {
        const appearance = await this.characterAppearanceService.get(appearanceId);
        if (!appearance)
            throw new common_1.NotFoundException('Appearance not found');
        await this.characterAppearanceService.delete(appearance);
        return { success: true };
    }
    async getAllCharacterAppearances(query, characterId) {
        const pagination = { limit: query.limit, page: query.page };
        const appearances = await this.characterAppearanceService.getCharacterAppearances(pagination, characterId, query.episodeId);
        return Object.assign(Object.assign({}, appearances.getSnapshot()), { data: appearances.data.map((d) => d.getSnapshot()) });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_character_appearance_dto_1.default]),
    __metadata("design:returntype", Promise)
], CharacterAppareancesController.prototype, "createCharacterAppearance", null);
__decorate([
    (0, common_1.Patch)('/:appearanceId'),
    __param(0, (0, common_1.Param)('appearanceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_character_appearance_dto_1.default]),
    __metadata("design:returntype", Promise)
], CharacterAppareancesController.prototype, "updateAppearance", null);
__decorate([
    (0, common_1.Delete)('/:appearanceId'),
    __param(0, (0, common_1.Param)('appearanceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharacterAppareancesController.prototype, "deleteCharacterAppearance", null);
__decorate([
    (0, common_1.Get)('/:characterId'),
    __param(0, (0, common_1.Query)({ transform: pagination_dto_1.PaginationDtoTransformOptions })),
    __param(1, (0, common_1.Param)('characterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CharacterAppareancesController.prototype, "getAllCharacterAppearances", null);
exports.CharacterAppareancesController = CharacterAppareancesController = __decorate([
    (0, common_1.Controller)('/api/character-appareances'),
    __metadata("design:paramtypes", [character_appearance_service_1.CharacterAppearanceService])
], CharacterAppareancesController);
//# sourceMappingURL=character-appareance.controller.js.map