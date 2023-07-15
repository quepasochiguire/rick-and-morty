"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Paginated {
    constructor(props) {
        this.data = props.data;
        this.total = props.total;
        this.page = props.page;
        this.limit = props.limit;
        this.next = props.next;
        this.previous = props.previous;
    }
    getSnapshot() {
        return {
            data: this.data,
            total: this.total,
            page: this.page,
            limit: this.limit,
            next: this.next,
            previous: this.previous,
        };
    }
}
exports.default = Paginated;
//# sourceMappingURL=paginated.model.js.map