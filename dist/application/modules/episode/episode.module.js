"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeModule = void 0;
const common_1 = require("@nestjs/common");
const episode_controller_1 = require("../../controllers/episode.controller");
const episode_service_1 = require("../../services/episode.service");
const database_module_1 = require("../../../infrastructure/database/database.module");
const episode_providers_1 = require("../../../infrastructure/repositories/episodes/episode.providers");
let EpisodeModule = exports.EpisodeModule = class EpisodeModule {
};
exports.EpisodeModule = EpisodeModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [...episode_providers_1.episodeProviders, episode_service_1.EpisodeService],
        controllers: [episode_controller_1.EpisodeController],
    })
], EpisodeModule);
//# sourceMappingURL=episode.module.js.map