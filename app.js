"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queryable_1 = require("./Queryable");
console.log('start');
let person = (name, surname) => {
    return {
        name,
        surname
    };
};
let data = [
    person('Rens', 'Boeser'),
    person('Sibren', 'van Ek'),
    person('Robin', 'Breedveld'),
    person('Ali', 'Musharuf'),
    person('Niels', 'Verwoert'),
    person('Sven', 'Kalkman'),
    person('Jonah', 'Kalkman'),
    person('Noah', 'Plaisier'),
];
let a = new Queryable_1.Table(data);
let b = a.select('name', 'surname');
console.log('original data:', a.getData());
console.log('selected data:', b.getData());
console.log('end');
//# sourceMappingURL=app.js.map