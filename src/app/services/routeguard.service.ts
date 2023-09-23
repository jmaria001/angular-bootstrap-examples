import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class RouteGuardService {
  constructor(public router: Router) { }
  canActivate(param_route: any): boolean {
    console.log('passou 4');
    console.log(param_route.data.Key);
    if (false) {
       this.router.navigate(['unauthorized']);
      return true;
    }
    return true;
  }
} 