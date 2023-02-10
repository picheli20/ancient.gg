import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { filter, map, Subscription } from 'rxjs';
import { updateWallet } from 'src/app/shared/store/action/user.action';
import { StoreApp } from 'src/app/shared/store/store-app.interface';
import { User } from '../interfaces/user.interface';
import { UpdateWallet, Wallet } from '../interfaces/wallet.interface';
import { userQuery } from '../queries/user.query';
import { walletSubscription } from '../subscriptions/wallet.subscription';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userQuery = this.apollo.watchQuery<{ currentUser: User }>({
    query: userQuery,
  });

  private walletWatchSubscription: Subscription | null = null;

  constructor(private apollo: Apollo, private store: Store<StoreApp>) {}

  async get(): Promise<User | null> {
    const result = await this.userQuery.refetch();

    return result.data.currentUser;
  }

  watchWallet() {
    this.walletWatchSubscription = this.apollo
      .subscribe<{ updateWallet: UpdateWallet }>({ query: walletSubscription })
      .pipe(
        map(({ data }) => data?.updateWallet.wallet),
        filter(Boolean)
      )
      .subscribe((wallet) => this.store.dispatch(updateWallet({ wallet })));
  }

  stopWatchWallet() {
    this.walletWatchSubscription?.unsubscribe();
  }
}
