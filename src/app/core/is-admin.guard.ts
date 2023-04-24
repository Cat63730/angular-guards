import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      

    
    if ( this.userService.getRole() === 'admin') {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
  

  constructor(private userService: UserService, private router: Router) {}

  
}
