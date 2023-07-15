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
exports.CharacterEntity = void 0;
const character_model_1 = require("../../../../domain/models/character/character.model");
const typeorm_1 = require("typeorm");
let CharacterEntity = exports.CharacterEntity = class CharacterEntity {
    toDomain() {
        return new character_model_1.default({
            id: this.id,
            name: this.name,
            status: this.status,
            type: this.type,
            species: this.species,
            gender: this.gender,
            image: this.image,
            episode: [],
        });
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], CharacterEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterEntity.prototype, "species", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CharacterEntity.prototype, "image", void 0);
exports.CharacterEntity = CharacterEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'characters' })
], CharacterEntity);
//# sourceMappingURL=character.entity.js.map