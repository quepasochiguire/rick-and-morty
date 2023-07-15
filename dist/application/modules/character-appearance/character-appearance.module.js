"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterAppearanceModule = void 0;
const common_1 = require("@nestjs/common");
const character_appareance_controller_1 = require("../../controllers/character-appareance.controller");
const character_appearance_service_1 = require("../../services/character-appearance.service");
const database_module_1 = require("../../../infrastructure/database/database.module");
const chracter_appearance_providers_1 = require("../../../infrastructure/repositories/chracter-appearance/chracter-appearance.providers");
let CharacterAppearanceModule = exports.CharacterAppearanceModule = class CharacterAppearanceModule {
};
exports.CharacterAppearanceModule = CharacterAppearanceModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [...chracter_appearance_providers_1.characterAppearanceProviders, character_appearance_service_1.CharacterAppearanceService],
        controllers: [character_appareance_controller_1.CharacterAppareancesController],
    })
], CharacterAppearanceModule);
//# sourceMappingURL=character-appearance.module.js.map