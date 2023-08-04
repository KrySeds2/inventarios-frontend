import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {

  }
  /**
   * Verifica si la sesión esta activa
   */
  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {

      console.log('KeyResponse___');
      if (localStorage.getItem('access') && localStorage.getItem('permits')) {
        return true;
      }else{
        this.auth.logout();
        this.router.navigateByUrl('/login');
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
