"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Table {
    constructor(data) {
        this.getData = () => this.data;
        this.select = function (...properties) {
            return new Table(this.data.map((oldObject) => {
                return pick(oldObject, properties);
            }));
        };
        this.where = function (predicate) {
            return new Table(this.data.filter(predicate));
        };
        this.orderBy = function (property, direction = 'asc') {
            return new Table(direction === 'asc' ? sortAsc(this.data, property) : sortDesc(this.data, property));
        };
        this.data = data;
    }
}
exports.Table = Table;
function pick(obj, keys) {
    return keys.map(k => k in obj ? { [k]: obj[k] } : {})
        .reduce((res, o) => Object.assign(res, o), {});
}
function sortAsc(data, property) {
    return data.sort((a, b) => {
        if (a[property] > b[property]) {
            return 1;
        }
        if (a[property] < b[property]) {
            return -1;
        }
        return 0;
    });
}
function sortDesc(data, property) {
    return data.sort((a, b) => {
        if (a[property] > b[property]) {
            return -1;
        }
        if (a[property] < b[property]) {
            return 1;
        }
        return 0;
    });
}
//# sourceMappingURL=Queryable.js.map