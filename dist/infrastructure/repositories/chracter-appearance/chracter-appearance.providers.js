"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterAppearanceProviders = exports.TYPEORM_CHARACTER_APPEARANCE_REPOSITORY = void 0;
const database_provider_1 = require("../../database/database.provider");
const chracter_appearance_entity_1 = require("./chracter-appearance.entity");
exports.TYPEORM_CHARACTER_APPEARANCE_REPOSITORY = 'TYPEORM_CHARACTER_APPEARANCE_REPOSITORY';
exports.characterAppearanceProviders = [
    {
        provide: exports.TYPEORM_CHARACTER_APPEARANCE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(chracter_appearance_entity_1.CharacterAppearanceEntity),
        inject: [database_provider_1.DATA_SOURCE],
    },
];
//# sourceMappingURL=chracter-appearance.providers.js.map