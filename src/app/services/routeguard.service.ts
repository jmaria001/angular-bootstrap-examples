import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class RouteGuardService {
  constructor(public router: Router) { }
  canActivate(param_route: any): boolean {
    if (false) {
       this.router.navigate(['unauthorized']);
      return true;
    }
    return true;
  }
} 