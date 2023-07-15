"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharacterAppearance {
    constructor(props) {
        Object.assign(this, props);
    }
    getId() {
        return this.id;
    }
    getCharacterId() {
        return this.characterId;
    }
    getStartMinute() {
        return Number(this.start.split(':')[0]);
    }
    getEndMinute() {
        return Number(this.end.split(':')[0]);
    }
    getStartSecond() {
        return Number(this.start.split(':')[1]);
    }
    getEndSecond() {
        return Number(this.end.split(':')[1]);
    }
    getStart() {
        return this.start;
    }
    getEnd() {
        return this.end;
    }
    getEpisodeId() {
        return this.episodeId;
    }
    update(props) {
        Object.assign(this, props);
    }
    getSnapshot() {
        return {
            id: this.id,
            characterId: this.characterId,
            start: this.start,
            end: this.end,
            episodeId: this.episodeId,
        };
    }
}
exports.default = CharacterAppearance;
//# sourceMappingURL=chracter-appearance.model.js.map