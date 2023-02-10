import { createAction, props } from '@ngrx/store';
import { Wallet } from 'src/app/graphql/interfaces/wallet.interface';
import { User } from '../../../graphql/interfaces/user.interface';

export const setUser = createAction(
  '[User] setUser',
  props<{ user: User | null }>()
);

export const updateWallet = createAction(
  '[User] updateWallet',
  props<{ wallet: Wallet }>()
);

export const restoreUser = createAction('[User] restoreUser');
export const logout = createAction('[User] logout');
