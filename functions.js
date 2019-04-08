"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pick(object, keys) {
    return keys.map(k => k in object ? { [k]: object[k] } : {})
        .reduce((res, o) => Object.assign(res, o), {});
}
exports.pick = pick;
function pickKeys(object, keys) {
    return keys.map(k => k in object ? { [k]: object[k] } : {})
        .reduce((res, o) => Object.assign(res, o), {});
}
exports.pickKeys = pickKeys;
function omit(object, keys) {
    return keys.map(k => k in object ? {} : { [k]: object[k] })
        .reduce((res, o) => Object.assign(res, o), {});
}
exports.omit = omit;
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
exports.sortAsc = sortAsc;
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
exports.sortDesc = sortDesc;
//# sourceMappingURL=functions.js.map