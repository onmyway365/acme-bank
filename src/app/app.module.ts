import { HttpClient } from '@angular/common/http';
import { AccountListDataService } from './services/account-list-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/Http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
