"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.episodeProviders = exports.TYPEORM_EPISODE_REPOSITORY = void 0;
const episode_entity_1 = require("./episode.entity");
const database_provider_1 = require("../../database/database.provider");
exports.TYPEORM_EPISODE_REPOSITORY = 'TYPEORM_EPISODE_REPOSITORY';
exports.episodeProviders = [
    {
        provide: exports.TYPEORM_EPISODE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(episode_entity_1.EpisodeEntity),
        inject: [database_provider_1.DATA_SOURCE],
    },
];
//# sourceMappingURL=episode.providers.js.map