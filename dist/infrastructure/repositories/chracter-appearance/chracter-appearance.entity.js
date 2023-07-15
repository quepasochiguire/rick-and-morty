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
exports.CharacterAppearanceEntity = void 0;
const chracter_appearance_model_1 = require("../../../domain/models/character-appearance/chracter-appearance.model");
const typeorm_1 = require("typeorm");
let CharacterAppearanceEntity = exports.CharacterAppearanceEntity = class CharacterAppearanceEntity {
    toDomain() {
        return new chracter_appearance_model_1.default({
            id: this.id,
            characterId: this.characterId,
            episodeId: this.episodeId,
            start: this.start,
            end: this.end,
        });
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], CharacterAppearanceEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterAppearanceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterAppearanceEntity.prototype, "characterId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterAppearanceEntity.prototype, "episodeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterAppearanceEntity.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterAppearanceEntity.prototype, "end", void 0);
exports.CharacterAppearanceEntity = CharacterAppearanceEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'characters-appearances' })
], CharacterAppearanceEntity);
//# sourceMappingURL=chracter-appearance.entity.js.map