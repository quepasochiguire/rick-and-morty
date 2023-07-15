"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeStatusValue = void 0;
var EpisodeStatusValue;
(function (EpisodeStatusValue) {
    EpisodeStatusValue["Planned"] = "Planned";
    EpisodeStatusValue["Released"] = "Released";
    EpisodeStatusValue["Canceled"] = "Canceled";
})(EpisodeStatusValue || (exports.EpisodeStatusValue = EpisodeStatusValue = {}));
class EpisodeStatus {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
exports.default = EpisodeStatus;
//# sourceMappingURL=episode-status.vo.js.map