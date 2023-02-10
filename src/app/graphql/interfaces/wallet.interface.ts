export interface Wallet {
  id: string;
  name: string;
  amount: number;
  currency: string;
}

export interface UpdateWallet {
  wallet: Wallet;
}
