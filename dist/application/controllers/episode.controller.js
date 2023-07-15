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
exports.EpisodeController = void 0;
const common_1 = require("@nestjs/common");
const episode_service_1 = require("../services/episode.service");
const pagination_dto_1 = require("../../domain/paginated/pagination.dto");
const create_episode_usecase_1 = require("../usecases/episode/create-episode.usecase");
const create_episode_dto_1 = require("../usecases/episode/dto/create-episode.dto");
const update_episode_dto_1 = require("../usecases/episode/dto/update-episode.dto");
const update_episode_usecase_1 = require("../usecases/episode/update-episode.usecase");
const cancel_episode_usecase_1 = require("../usecases/episode/cancel-episode.usecase");
let EpisodeController = exports.EpisodeController = class EpisodeController {
    constructor(episodeService) {
        this.episodeService = episodeService;
    }
    async getAllEpisodes(query) {
        const { season, page, limit } = query;
        const pagination = { page, limit };
        const filters = {};
        if (season)
            Object.assign(filters, { season });
        const episodes = await this.episodeService.getAll({
            pagination,
            season,
        });
        return Object.assign(Object.assign({}, episodes.getSnapshot()), { data: episodes.data.map((c) => c.getSnapshot()) });
    }
    async createEpisode(episodeData) {
        const createEpisodeUsecase = new create_episode_usecase_1.default(this.episodeService);
        const episode = await createEpisodeUsecase.execute(episodeData);
        return episode.getSnapshot();
    }
    async cancelEpisode(episodeNumber, season) {
        const cancelEpisodeUsecase = new cancel_episode_usecase_1.default(this.episodeService);
        await cancelEpisodeUsecase.execute(episodeNumber, season);
        return { success: true };
    }
    async updateEpisode(episodeData, episodeNumber, season) {
        const updateEpisodeUsecase = new update_episode_usecase_1.default(this.episodeService);
        const episode = await updateEpisodeUsecase.execute(episodeNumber, season, episodeData);
        return episode.getSnapshot();
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)({ transform: pagination_dto_1.PaginationDtoTransformOptions })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EpisodeController.prototype, "getAllEpisodes", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_episode_dto_1.CreateEpisodeDto]),
    __metadata("design:returntype", Promise)
], EpisodeController.prototype, "createEpisode", null);
__decorate([
    (0, common_1.Patch)('/:episodeNumber/:season/cancel'),
    __param(0, (0, common_1.Param)('episodeNumber', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('season', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], EpisodeController.prototype, "cancelEpisode", null);
__decorate([
    (0, common_1.Patch)('/:episodeNumber/:season'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('episodeNumber', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)('season', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_episode_dto_1.UpdateEpisodeDto, Number, Number]),
    __metadata("design:returntype", Promise)
], EpisodeController.prototype, "updateEpisode", null);
exports.EpisodeController = EpisodeController = __decorate([
    (0, common_1.Controller)('/api/episodes'),
    __metadata("design:paramtypes", [episode_service_1.EpisodeService])
], EpisodeController);
//# sourceMappingURL=episode.controller.js.map