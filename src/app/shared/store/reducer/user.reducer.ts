import { createReducer, on } from '@ngrx/store';
import { setUser } from '../action/user.action';
import { UserState } from '../state/user-state.interface';

const initialState: UserState = {
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, action) => ({ ...state, user: action.user }))
);
