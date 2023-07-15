"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const episode_status_vo_1 = require("./episode-status.vo");
class Episode {
    constructor(props) {
        Object.assign(this, props);
        this.status = new episode_status_vo_1.default(props.status);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStatus() {
        return this.status;
    }
    getSesason() {
        return this.season;
    }
    getEpisode() {
        return this.episode;
    }
    cancel() {
        this.status = new episode_status_vo_1.default(episode_status_vo_1.EpisodeStatusValue.Canceled);
    }
    update(props) {
        Object.assign(this, props);
        if (props.status)
            this.status = new episode_status_vo_1.default(props.status);
    }
    static create(props) {
        return new Episode(props);
    }
    getSnapshot() {
        return {
            id: this.id,
            name: this.name,
            airDate: this.airDate,
            episode: this.episode,
            characters: this.characters,
            created: this.created,
            season: this.season,
            status: this.status.getValue(),
        };
    }
}
exports.default = Episode;
//# sourceMappingURL=episode.model.js.map