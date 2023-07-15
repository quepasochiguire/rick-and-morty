"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = exports.DATA_SOURCE = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const character_entity_1 = require("../repositories/character/typeorm/character.entity");
const episode_entity_1 = require("../repositories/episodes/episode.entity");
const chracter_appearance_entity_1 = require("../repositories/chracter-appearance/chracter-appearance.entity");
exports.DATA_SOURCE = 'DATA_SOURCE';
exports.databaseProviders = [
    {
        provide: exports.DATA_SOURCE,
        inject: [config_1.ConfigService],
        useFactory: async (configService) => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mongodb',
                url: configService.get('MONGO_URL'),
                entities: [character_entity_1.CharacterEntity, episode_entity_1.EpisodeEntity, chracter_appearance_entity_1.CharacterAppearanceEntity],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.provider.js.map