import { gql } from 'apollo-angular';

export const walletSubscription = gql`
  subscription OnUpdateWallet {
    updateWallet {
      wallet {
        id
        amount
        name
        currency
      }
    }
  }
`;
