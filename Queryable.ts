import {Omit, PickKeys} from 'types'

export class Table<T extends Object>{
	private data: Array<T>

	constructor(data: Array<T>) {
		this.data = data;
	}

	getData = () => this.data

	select = function <K extends keyof T>(this: Table<T>, ...properties: Array<K>): Table<Pick<T, K>> {
		return new Table<Pick<T, K>>(this.data.map((oldObject: T) => {
			return pick<T, K>(oldObject, properties);
		}));
	}

	where = function (this: Table<T>, predicate: (object: T) => boolean): Table<T> {
		return new Table<T>(this.data.filter(predicate));
	}

	orderBy = function <K extends keyof T>(this: Table<T>, property: K, direction: 'asc' | 'desc' = 'asc'): Table<T> {
		return new Table<T>(direction === 'asc' ? sortAsc(this.data, property) : sortDesc(this.data, property));
	}
}

function pick<T, K extends keyof T>(obj: T, keys: Array<K>): Pick<T, K> {
	return keys.map(k => k in obj ? { [k]: obj[k] } : {})
		.reduce((res, o) => Object.assign(res, o), {}) as Pick<T, K>;
}

function sortAsc<T, K extends keyof T>(data: Array<T>, property: K): Array<T> {
	return data.sort((a: T, b: T) => {
		if (a[property] > b[property]) {
			return 1;
		}
		if (a[property] < b[property]) {
			return -1;
		}
		return 0;
	})
}

function sortDesc<T, K extends keyof T>(data: Array<T>, property: K): Array<T> {
	return data.sort((a: T, b: T) => {
		if (a[property] > b[property]) {
			return -1;
		}
		if (a[property] < b[property]) {
			return 1;
		}
		return 0;
	});
}
