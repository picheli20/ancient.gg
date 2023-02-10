import { Edges } from './node-query.interface';

export interface BoxConnection {
  edges: Edges<Box>[];
}

export interface Box {
  cost: number;
  name: string;
  iconUrl: string;
  currency: string;
}
