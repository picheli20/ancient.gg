import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BoxConnection } from '../interfaces/box.interface';
import { boxesQuery } from './queries/boxes.query';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private boxesQuery = this.apollo.watchQuery<{ boxes: BoxConnection }>({
    query: boxesQuery,
  });

  constructor(private apollo: Apollo) {}

  async get(): Promise<any> {
    const result = await this.boxesQuery.refetch();

    return result.data.boxes;
  }
}
