import { Item } from './item.interface';
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

export interface BoxDetail {
  id: string;
  name: string;
  slug: string;
  iconUrl: string;
  cost: number;
  currency: string;
  description: string;
  slots: {
    rate: number;
    item: Item;
  }[];
}

export interface BoxOpeningPayload {
  openBox: BoxOpening[];
}

export interface BoxOpening {
  id: string;
  itemVariant: Item;
}
