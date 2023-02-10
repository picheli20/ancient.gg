import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

export const setUser = createAction(
  '[User] setUser',
  props<{ user: User | null }>()
);
export const restoreUser = createAction('[User] restoreUser');
