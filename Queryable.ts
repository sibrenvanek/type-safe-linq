import { Omit, PickKeys } from 'types';
import { pick, sortDesc, sortAsc } from 'functions'

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
