import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AtmServiceService } from '../services/atm-service.service';

@Injectable()
export class GuardAuthService implements CanActivate {

  constructor(public atmService : AtmServiceService, private router : Router) { }
  
  canActivate() : boolean {
    
    if (this.atmService.accountValid) {
      return true; } 
      this.router.navigate(['/auth']);
      return false;
  }
}
