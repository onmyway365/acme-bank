export class Account {
  public accountNumber: number;
  public accountType: string;
  public balance: string;

  constructor(accountNumber: number, accountType: string, balance: string) {
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.balance = balance;
  }
}
