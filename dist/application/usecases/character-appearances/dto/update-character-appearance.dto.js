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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const add_character_appearance_dto_1 = require("./add-character-appearance.dto");
class UpdateCharacterAppearanceDto {
}
exports.default = UpdateCharacterAppearanceDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCharacterAppearanceDto.prototype, "characterId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCharacterAppearanceDto.prototype, "episodeId", void 0);
__decorate([
    (0, class_validator_1.Matches)(add_character_appearance_dto_1.timeRegex, { message: 'Start time must be in format HH:mm' }),
    (0, add_character_appearance_dto_1.IsValidAppearanceTime)('start'),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCharacterAppearanceDto.prototype, "start", void 0);
__decorate([
    (0, class_validator_1.Matches)(add_character_appearance_dto_1.timeRegex, { message: 'End time must be in format HH:mm' }),
    (0, add_character_appearance_dto_1.IsValidAppearanceTime)('end'),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCharacterAppearanceDto.prototype, "end", void 0);
//# sourceMappingURL=update-character-appearance.dto.js.map