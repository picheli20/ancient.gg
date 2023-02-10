import { Edges } from './node-query.interface';

export interface BoxConnection {
  edges: Edges<Box>[];
}

export interface Box {
  cost: number;
  name: string;
  slug: string;
  iconUrl: string;
  currency: string;
}
