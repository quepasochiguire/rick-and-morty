"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterProviders = exports.TYPEORM_CHARACTER_REPOSITORY = void 0;
const character_entity_1 = require("./character.entity");
const database_provider_1 = require("../../../database/database.provider");
exports.TYPEORM_CHARACTER_REPOSITORY = 'TYPEORM_CHARACTER_REPOSITORY';
exports.characterProviders = [
    {
        provide: exports.TYPEORM_CHARACTER_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(character_entity_1.CharacterEntity),
        inject: [database_provider_1.DATA_SOURCE],
    },
];
//# sourceMappingURL=character.providers.js.map