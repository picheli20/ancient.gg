import { User } from 'src/app/graphql/interfaces/user.interface';
import { logout, setUser, updateWallet } from '../action/user.action';
import { UserState } from '../state/user-state.interface';
import { initialState, userReducer } from './user.reducer';

const user: User = {
  name: 'Michael Jackson',
  avatar:
    'https://pbs.twimg.com/profile_images/1267920847290974209/YW20lN0d_400x400.jpg',
  id: 'mj',
  wallets: [
    {
      id: '1',
      amount: 1000,
      currency: 'USD',
      name: 'main',
    },
    {
      id: '2',
      amount: 2000,
      currency: 'USD',
      name: 'promo',
    },
  ],
};

describe('userReducer', () => {
  let state: UserState = initialState;

  beforeEach(() => {
    state = initialState;
  });

  describe('setUser', () => {
    it('should set the user', () => {
      const newState = userReducer(state, setUser({ user }));

      expect(newState.user?.name).toBe('Michael Jackson');
    });
  });

  describe('logout', () => {
    it('should remove the user', () => {
      const newState = userReducer({ ...state, user }, logout());

      expect(newState.user).toBe(null);
    });
  });

  describe('updateWallet', () => {
    it('should update user wallet', () => {
      const newState = userReducer(
        { ...state, user },
        updateWallet({
          wallet: {
            id: '1',
            amount: 10,
            currency: 'USD',
            name: 'main',
          },
        })
      );

      expect(
        newState.user?.wallets.find((wallet) => wallet.id === '1')?.amount
      ).toBe(10);
    });
  });
});
