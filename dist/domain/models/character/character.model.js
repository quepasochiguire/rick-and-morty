"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_gender_vo_1 = require("./character-gender.vo");
const character_status_vo_1 = require("./character-status.vo");
class Character {
    constructor(props) {
        Object.assign(this, props);
        this.status = new character_status_vo_1.default(props.status);
        this.gender = new character_gender_vo_1.default(props.gender);
    }
    update(props) {
        Object.assign(this, props);
        if (props.status)
            this.status = new character_status_vo_1.default(props.status);
        if (props.gender)
            this.gender = new character_gender_vo_1.default(props.gender);
    }
    getEpisodes() {
        return this.episode;
    }
    getType() {
        return this.type;
    }
    getSpecies() {
        return this.species;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    isAlive() {
        return this.status.value === character_status_vo_1.CharacterStatusValue.Alive;
    }
    suspend() {
        this.status = new character_status_vo_1.default(character_status_vo_1.CharacterStatusValue.Suspend);
    }
    kill() {
        this.status = new character_status_vo_1.default(character_status_vo_1.CharacterStatusValue.Dead);
    }
    revive() {
        this.status = new character_status_vo_1.default(character_status_vo_1.CharacterStatusValue.Alive);
    }
    getStatus() {
        return this.status;
    }
    static create(props) {
        return new Character(props);
    }
    getSnapshot() {
        return {
            id: this.id,
            name: this.name,
            status: this.status.value,
            species: this.species,
            type: this.type,
            gender: this.gender.value,
            episode: this.episode,
            image: this.image,
        };
    }
}
exports.default = Character;
//# sourceMappingURL=character.model.js.map