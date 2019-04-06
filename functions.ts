

export function pick<T, K extends keyof T>(obj: T, keys: Array<K>): Pick<T, K> {
	return keys.map(k => k in obj ? { [k]: obj[k] } : {})
		.reduce((res, o) => Object.assign(res, o), {}) as Pick<T, K>;
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