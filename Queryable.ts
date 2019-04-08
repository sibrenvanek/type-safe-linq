import _ from 'lodash';
import { Omit, PickKeys } from './types';
import { pick, sortDesc, sortAsc, pickKeys, omit } from './functions'

export class Table<T extends Object>{
	private data: Array<T>

	constructor(data: Array<T>) {
		this.data = data;
	}

	getData = () => _.cloneDeep(this.data);

	select = function <K extends keyof T>(this: Table<T>, ...properties: Array<K>): Table<Pick<T, K>> {
		return new Table<Pick<T, K>>(this.data.map((object: T) => {
			return pick<T, K>(object, properties);
		}));
	}

	selectPickKeys = function <K extends keyof T>(this: Table<T>, ...properties: Array<K>): Table<PickKeys<T, Array<K>>> {
		return new Table<PickKeys<T, Array<K>>>(this.data.map((object: T) => {
			return pickKeys<T, Array<K>>(object, properties);
		}));
	}

	where = function (this: Table<T>, predicate: (object: T) => boolean): Table<T> {
		return new Table<T>(this.data.filter(predicate));
	}

	orderBy = function <K extends keyof T>(this: Table<T>, property: K, direction: 'asc' | 'desc' = 'asc'): Table<T> {
		return new Table<T>(direction === 'asc' ? sortAsc(this.data, property) : sortDesc(this.data, property));
	}
}
