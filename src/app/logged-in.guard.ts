import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  return inject(AuthService).isLogged() ? true : inject(Router).createUrlTree(['/login']);
  // return inject(AuthService).isLogged() ? true : inject(Router).navigateByUrl('/login');
};
