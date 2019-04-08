import { PickKeys, Omit } from "types";


export function pick<T, K extends keyof T>(object: T, keys: Array<K>): Pick<T, K> {
	return keys.map(k => k in object ? { [k]: object[k] } : {})
		.reduce((res, o) => Object.assign(res, o), {}) as Pick<T, K>;
}

export function pickKeys<T, Conditions extends Array<keyof T>>(object: T, keys: Conditions): PickKeys<T, Conditions> {
	return keys.map(k => k in object ? { [k]: object[k] } : {})
		.reduce((res, o) => Object.assign(res, o), {}) as PickKeys<T, Conditions>;
}

export function omit<T, K extends keyof T>(object: T, keys: Array<K>): Omit<T, K> {
	return keys.map(k => k in object ? {} : { [k]: object[k] })
		.reduce((res, o) => Object.assign(res, o), {}) as Omit<T, K>;
}

export function sortAsc<T, K extends keyof T>(data: Array<T>, property: K): Array<T> {
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

export function sortDesc<T, K extends keyof T>(data: Array<T>, property: K): Array<T> {
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