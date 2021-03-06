import { Coordinate } from './coordinate';
import { Extent } from './extent';

export function createExtent(extent: Extent): Type;
export function none(center?: Coordinate): Coordinate;
export type Type = ((param0: Coordinate) => Coordinate);
