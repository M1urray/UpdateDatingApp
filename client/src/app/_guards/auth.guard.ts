import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { AccountService } from '../_services/account.service';

export const authGuard: CanActivateFn = (route, state) => {
  const accountsService = inject(AccountService);
  const toastr = inject(ToastrService);

  if (accountsService.currentUser()) {
    return true;
  }
  else {
    toastr.error("You shall not pass!");
    return false;
  }
};
