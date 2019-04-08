"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const functions_1 = require("./functions");
class Table {
    constructor(data) {
        this.getData = () => lodash_1.default.cloneDeep(this.data);
        this.select = function (...properties) {
            return new Table(this.data.map((object) => {
                return functions_1.pick(object, properties);
            }));
        };
        this.selectPickKeys = function (...properties) {
            return new Table(this.data.map((object) => {
                return functions_1.pickKeys(object, properties);
            }));
        };
        this.where = function (predicate) {
            return new Table(this.data.filter(predicate));
        };
        this.orderBy = function (property, direction = 'asc') {
            return new Table(direction === 'asc' ? functions_1.sortAsc(this.data, property) : functions_1.sortDesc(this.data, property));
        };
        this.data = data;
    }
}
exports.Table = Table;
//# sourceMappingURL=Queryable.js.map