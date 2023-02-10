import { Wallet } from './wallet.interface';

export interface User {
  id: string;
  name: string;
  avatar: string;
  wallets: Wallet[];
}
