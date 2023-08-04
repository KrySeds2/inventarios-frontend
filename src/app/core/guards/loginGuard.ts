import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {

  }
  /**
   * Verifica si la sesión esta activa
   */
  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      if (localStorage.getItem('access') && localStorage.getItem('permits') && localStorage.getItem('restDataSourceKey') && localStorage.getItem('privateKey')) {
        this.router.navigateByUrl('/home');
      }else{
        this.auth.logout();
        return true;
      }
    } else {
        return true;
    }
  }
}
