"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterModule = void 0;
const common_1 = require("@nestjs/common");
const character_controller_1 = require("../../controllers/character.controller");
const character_service_1 = require("../../services/character.service");
const database_module_1 = require("../../../infrastructure/database/database.module");
const character_providers_1 = require("../../../infrastructure/repositories/character/typeorm/character.providers");
let CharacterModule = exports.CharacterModule = class CharacterModule {
};
exports.CharacterModule = CharacterModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [...character_providers_1.characterProviders, character_service_1.CharacterService],
        controllers: [character_controller_1.CharacterController],
    })
], CharacterModule);
//# sourceMappingURL=character.module.js.map