import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { User } from '../interfaces/user.interface';
import { userQuery } from './queries/user.query';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userQuery = this.apollo.watchQuery<{ currentUser: User }>({
    query: userQuery,
  });

  constructor(private apollo: Apollo) {}

  async get(): Promise<User | null> {
    const result = await this.userQuery.refetch();

    return result.data.currentUser;
  }
}
