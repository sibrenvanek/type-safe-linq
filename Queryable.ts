class Table<T extends object>{
	data: Array<T>

	constructor(data: Array<T>) {
		this.data = data;
	}

	select = function <K extends keyof T>(...properties: Array<K>): T[K] {
		return 
	}
}

type ConvertProperties<T> =
	T extends (infer U)[] ? U :
	T extends (...args: any[]) => infer U ? U :
	T extends Promise<infer U> ? U :
	T;

interface test {
	a: number
	b: string
	c: boolean
}

let data: Array<test> = [{
	a: 1,
	b: 'hi',
	c: false
}, {
	a: 2,
	b: 'bye',
	c: true
}];

let foo = new Table<test>(data);

let bar = foo.select('a', 'c');