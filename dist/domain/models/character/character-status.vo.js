"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterStatusValue = void 0;
var CharacterStatusValue;
(function (CharacterStatusValue) {
    CharacterStatusValue["Alive"] = "Alive";
    CharacterStatusValue["Suspend"] = "Suspend";
    CharacterStatusValue["Dead"] = "Dead";
})(CharacterStatusValue || (exports.CharacterStatusValue = CharacterStatusValue = {}));
class CharacterStatus {
    constructor(status) {
        this.status = status;
    }
    get value() {
        return this.status;
    }
}
exports.default = CharacterStatus;
//# sourceMappingURL=character-status.vo.js.map