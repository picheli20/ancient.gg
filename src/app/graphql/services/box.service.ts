import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { delay, filter, map, of } from 'rxjs';
import {
  BoxConnection,
  BoxDetail,
  BoxOpeningPayload,
} from '../interfaces/box.interface';
import { openBox } from '../mutations/open-box.mutation';
import { boxDetailQuery } from '../queries/box-detail.query';
import { boxesQuery } from '../queries/boxes.query';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  constructor(private apollo: Apollo) {}

  async get(): Promise<BoxConnection> {
    const result = await this.apollo
      .watchQuery<{ boxes: BoxConnection }>({
        query: boxesQuery,
      })
      .refetch();

    return result.data.boxes;
  }

  async load(slug: string): Promise<BoxDetail> {
    const result = await this.apollo
      .watchQuery<{ box: BoxDetail }>({
        query: boxDetailQuery,
        variables: { slug },
      })
      .refetch();

    return result.data.box;
  }

  open(input: { amount: number; boxId: string; multiplierBoxBet: number }) {
    return this.apollo
      .mutate<{ openBox: BoxOpeningPayload }>({
        mutation: openBox,
        variables: { input },
      })
      .pipe(
        map((data) => data.data?.openBox.boxOpenings),
        filter(Boolean)
      );
  }
}
