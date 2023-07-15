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
exports.EpisodeService = void 0;
const common_1 = require("@nestjs/common");
const paginated_model_1 = require("../../domain/paginated/paginated.model");
const episode_providers_1 = require("../../infrastructure/repositories/episodes/episode.providers");
const typeorm_1 = require("typeorm");
let EpisodeService = exports.EpisodeService = class EpisodeService {
    constructor(episodeRepository) {
        this.episodeRepository = episodeRepository;
    }
    async getBySeason(season) {
        const episodes = await this.episodeRepository.find({ where: { season } });
        return episodes.map((e) => e.toDomain());
    }
    async getAll({ season, pagination, }) {
        const { page, limit } = pagination;
        const total = await this.episodeRepository.count();
        const episodes = await this.episodeRepository.find({
            where: season ? { season } : {},
            take: limit,
            skip: (page - 1) * limit,
        });
        return new paginated_model_1.default({
            data: episodes.map((c) => c.toDomain()),
            total,
            limit,
            page,
            next: page * limit < total ? page + 1 : null,
            previous: page > 1 ? page - 1 : null,
        });
    }
    async update(episode) {
        await this.validateIfEpisodeExists(episode);
        await this.episodeRepository.update({ id: episode.getId() }, episode.getSnapshot());
    }
    async save(episode) {
        await this.validateIfEpisodeExists(episode);
        const episodeEntity = this.episodeRepository.create(episode.getSnapshot());
        await this.episodeRepository.save(episodeEntity);
    }
    async getEpisode(episodeNumber, season) {
        const episode = await this.episodeRepository.findOne({
            where: { episode: episodeNumber, season },
        });
        return episode.toDomain();
    }
    async suspend(episode) {
        episode.cancel();
        await this.episodeRepository.update({ id: episode.getId() }, episode.getSnapshot());
    }
    async validateIfEpisodeExists(episode) {
        const episodeExists = await this.episodeRepository.findOne({
            where: {
                season: episode.getSesason(),
                name: episode.getName(),
                episode: episode.getEpisode(),
            },
        });
        if (episodeExists)
            throw new common_1.BadRequestException('Episode already exists');
    }
};
exports.EpisodeService = EpisodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(episode_providers_1.TYPEORM_EPISODE_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EpisodeService);
//# sourceMappingURL=episode.service.js.map