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
exports.CharacterAppearanceService = void 0;
const common_1 = require("@nestjs/common");
const Moment = require("moment");
const moment_range_1 = require("moment-range");
const paginated_model_1 = require("../../domain/paginated/paginated.model");
const chracter_appearance_providers_1 = require("../../infrastructure/repositories/chracter-appearance/chracter-appearance.providers");
const typeorm_1 = require("typeorm");
const moment = (0, moment_range_1.extendMoment)(Moment);
let CharacterAppearanceService = exports.CharacterAppearanceService = class CharacterAppearanceService {
    constructor(characterAppearanceRepo) {
        this.characterAppearanceRepo = characterAppearanceRepo;
    }
    async get(id) {
        const appearance = await this.characterAppearanceRepo.findOneOrFail({
            where: {
                id,
            },
        });
        return appearance.toDomain();
    }
    async getAllCharacterAppearances(characterId, episodeId) {
        const characterAppearances = await this.characterAppearanceRepo.find({
            where: { characterId, episodeId },
        });
        return characterAppearances.map((c) => c.toDomain());
    }
    async getCharacterAppearances(pagination, characterId, episodeId) {
        const { page, limit } = pagination;
        const where = { characterId };
        if (episodeId)
            Object.assign(where, { episodeId });
        const characterAppearances = await this.characterAppearanceRepo.find({
            where,
            take: limit,
            skip: (page - 1) * limit,
        });
        const total = await this.characterAppearanceRepo.count({
            where,
        });
        return new paginated_model_1.default({
            data: characterAppearances.map((c) => c.toDomain()),
            total,
            limit,
            page,
            next: page * limit < total ? page + 1 : null,
            previous: page > 1 ? page - 1 : null,
        });
    }
    async save(characterAppearance) {
        await this.validateIfPreviousAppearanceOverlaps(characterAppearance, characterAppearance.getEpisodeId());
        const characterAppearanceEntity = this.characterAppearanceRepo.create(characterAppearance.getSnapshot());
        await this.characterAppearanceRepo.save(characterAppearanceEntity);
    }
    async update(characterAppearance) {
        await this.validateIfPreviousAppearanceOverlaps(characterAppearance, characterAppearance.getEpisodeId());
        await this.characterAppearanceRepo.update({ id: characterAppearance.getId() }, characterAppearance.getSnapshot());
    }
    async delete(characterAppearance) {
        const characterAppearanceEntity = await this.characterAppearanceRepo.findOneOrFail({
            where: {
                id: characterAppearance.getId(),
            },
        });
        await this.characterAppearanceRepo.remove(characterAppearanceEntity);
    }
    async validateIfPreviousAppearanceOverlaps(characterAppearance, episodeId) {
        const previousCharacterAppearances = await this.getAllCharacterAppearances(characterAppearance.getCharacterId(), episodeId);
        const isOverlapping = previousCharacterAppearances.some((c) => {
            return this.overlaps(c, characterAppearance);
        });
        if (isOverlapping) {
            throw new common_1.BadRequestException('Character appearance overlaps with another one');
        }
    }
    overlaps(characterAppearance, newCharacterAppearance) {
        const rangeA = moment.range(moment()
            .set('minutes', characterAppearance.getStartMinute())
            .set('seconds', characterAppearance.getStartSecond()), moment()
            .set('minutes', characterAppearance.getEndMinute())
            .set('seconds', characterAppearance.getEndSecond()));
        const rangeB = moment.range(moment()
            .set('minutes', newCharacterAppearance.getStartMinute())
            .set('seconds', newCharacterAppearance.getStartSecond()), moment()
            .set('minutes', newCharacterAppearance.getEndMinute())
            .set('seconds', newCharacterAppearance.getEndSecond()));
        if (rangeA.overlaps(rangeB)) {
            return true;
        }
        return false;
    }
};
exports.CharacterAppearanceService = CharacterAppearanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(chracter_appearance_providers_1.TYPEORM_CHARACTER_APPEARANCE_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CharacterAppearanceService);
//# sourceMappingURL=character-appearance.service.js.map