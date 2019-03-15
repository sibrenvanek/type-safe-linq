import { Selector } from '../types/Types';
import { IIterable } from './Iterators'

interface IQueryable<TOut> {
	data: Array<TOut>;
	select<TSelectorOut>(selector: Selector<TOut, TSelectorOut>): IEnumerable<TSelectorOut>;
}

export interface IEnumerable<TOut> extends IQueryable<TOut>, IIterable<TOut> {
	copy(): IEnumerable<TOut>;
}