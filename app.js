"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queryable_1 = require("./Queryable");
console.log('start');
let person = (name, preSurname, surname, schoolClass, studentId) => {
    return {
        name,
        preSurname,
        surname,
        studentId,
        class: schoolClass
    };
};
let data = [
    person('Rens', undefined, 'Boeser', 'INF3A', 2),
    person('Sibren', 'van', 'Ek', 'INF3A', 1),
    person('Robin', undefined, 'Breedveld', 'INF3A', 6),
    person('Ali', undefined, 'Musharuf', 'INF3A', 8),
    person('Niels', undefined, 'Verwoert', 'INF3A', 4),
    person('Sven', undefined, 'Kalkman', 'INF3A', 3),
    person('Jonah', undefined, 'Kalkman', 'INF3A', 7),
    person('Noah', undefined, 'Plaisier', 'INF3A', 5),
];
let a = new Queryable_1.Table(data);
let b = a.select('name', 'preSurname', 'surname', 'studentId');
let c = b.where(object => object.studentId < 5);
let d = c.orderBy('studentId');
console.log('original data:', a.getData());
console.log('selected data:', b.getData());
console.log('filtered data:', c.getData());
console.log('ordered data:', d.getData());
console.log('end');
//# sourceMappingURL=app.js.map