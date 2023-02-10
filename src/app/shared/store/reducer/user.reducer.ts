import { createReducer, on } from '@ngrx/store';
import { logout, setUser, updateWallet } from '../action/user.action';
import { UserState } from '../state/user-state.interface';

export const initialState: UserState = {
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, action) => ({ ...state, user: action.user })),
  on(logout, (state) => ({ ...state, user: null })),
  on(updateWallet, (state, action) => {
    if (!state.user) {
      return state;
    }

    return {
      ...state,
      user: {
        ...state.user,
        wallets: [
          ...state.user?.wallets.filter(
            (wallet) => wallet.id !== action.wallet.id
          ),
          action.wallet,
        ],
      },
    };
  })
);
