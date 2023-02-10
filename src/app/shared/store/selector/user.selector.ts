import { createSelector } from '@ngrx/store';
import { StoreApp } from '../store-app.interface';

export const getUserState = (state: StoreApp) => state.user;
export const getUser = createSelector(getUserState, ({ user }) => user);
export const isAuthenticated = createSelector(
  getUserState,
  ({ user }) => !!user
);
