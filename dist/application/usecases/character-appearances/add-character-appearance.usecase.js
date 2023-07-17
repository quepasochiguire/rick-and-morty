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
const common_1 = require("@nestjs/common");
const character_appearance_service_1 = require("../../services/character-appearance.service");
const chracter_appearance_model_1 = require("../../../domain/models/character-appearance/chracter-appearance.model");
const crypto_1 = require("crypto");
let AddCharacterAppearanceUsecase = class AddCharacterAppearanceUsecase {
    constructor(characterAppearanceService) {
        this.characterAppearanceService = characterAppearanceService;
    }
    async execute(dto) {
        const appearance = chracter_appearance_model_1.default.create(Object.assign({ id: (0, crypto_1.randomUUID)() }, dto));
        await this.characterAppearanceService.save(appearance);
        return appearance;
    }
};
AddCharacterAppearanceUsecase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [character_appearance_service_1.CharacterAppearanceService])
], AddCharacterAppearanceUsecase);
exports.default = AddCharacterAppearanceUsecase;
//# sourceMappingURL=add-character-appearance.usecase.js.map