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
exports.EpisodeEntity = void 0;
const episode_status_vo_1 = require("../../../domain/models/episode/episode-status.vo");
const episode_model_1 = require("../../../domain/models/episode/episode.model");
const typeorm_1 = require("typeorm");
let EpisodeEntity = exports.EpisodeEntity = class EpisodeEntity {
    toDomain() {
        return new episode_model_1.default({
            id: this.id,
            name: this.name,
            characters: this.characters,
            airDate: this.airDate,
            episode: this.episode,
            created: this.created,
            season: this.season,
            status: this.status,
        });
    }
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], EpisodeEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EpisodeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EpisodeEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EpisodeEntity.prototype, "airDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EpisodeEntity.prototype, "episode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], EpisodeEntity.prototype, "characters", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EpisodeEntity.prototype, "season", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EpisodeEntity.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EpisodeEntity.prototype, "status", void 0);
exports.EpisodeEntity = EpisodeEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'episodes' })
], EpisodeEntity);
//# sourceMappingURL=episode.entity.js.map