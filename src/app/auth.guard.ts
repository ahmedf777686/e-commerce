import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _token =inject(Router)
  if(localStorage.getItem('_token')!==null){
    return true;
  }else{
    _token.navigate(['/login'])
    return false;
  }

};
