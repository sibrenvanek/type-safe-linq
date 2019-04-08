import { Table } from './Queryable'

console.log('start');

type Person = {
	name: string,
	surname: string,
}
let person = (name: string, surname: string): Person => {
	return {
		name,
		surname
	}
}

let data: Array<Person> = [
	person('Rens', 'Boeser'),
	person('Sibren', 'van Ek'),
	person('Robin', 'Breedveld'),
	person('Ali', 'Musharuf'),
	person('Niels', 'Verwoert'),
	person('Sven', 'Kalkman'),
	person('Jonah', 'Kalkman'),
	person('Noah', 'Plaisier'),
];

let a = new Table<Person>(data);

let b = a.select('name', 'surname');

console.log('original data:', a.getData())
console.log('selected data:', b.getData())

console.log('end');
