import { TestBed } from '@angular/core/testing';

import { AccountListDataService } from './account-list-data.service';

describe('AccountListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountListDataService = TestBed.get(AccountListDataService);
    expect(service).toBeTruthy();
  });
});
