import { AccountListDataService } from './../services/account-list-data.service';
import { Account } from './../view-models/account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  public accountList = [];
  public total: number = 0;

  constructor(private accountListDataService: AccountListDataService) { }

  ngOnInit() {
    this.accountListDataService.getAccountList().subscribe(data => {
      this.calculateBalance(data);
    });
  }

  calculateBalance(data) {
    data.forEach(record => {
      this.total += parseFloat(record.balance);
      if (record.account_type === 'cheque') {
        if (record.balance >= -500) {
          record.canWithdraw = true;
          this.accountList.push(record);
        } else {
          record.canWithdraw = false;
          this.accountList.push(record);
        }
      }
      if (record.account_type === 'savings') {
        if (record.balance >= 0) {
          record.canWithdraw = true;
          this.accountList.push(record);
        } else {
          record.canWithdraw = false;
          this.accountList.push(record);
        }
      }
    });
  }

  onWithdraw() {
    alert('Success');
  }

}
