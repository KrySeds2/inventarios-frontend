import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { UsersService } from '@shared/services/users/users.service';
import { JwtService } from '@core/services/jwt.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('dialogChangePassword') dialogChangePassword: ChangePasswordComponent;
  title: string = 'INVENTARIOS';
  @ViewChild('preloader') preloader: ElementRef;
  eventAllSubscription: Subscription;
  companyLogo: string = environment.noImage;
  items: any[];
  userName: string = '';
  fullName: string = '';
  userImage: string = environment.noImage;
  companyPublicKey: string = '';
  profile: any = '';
  op: any;
  constructor(
    private router: Router,
    private auth: AuthService,
    private user: UsersService,
    private jwtService: JwtService,

  ) { }

  ngOnInit(): void {

  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
  loadingDisplayBackground() {
    setTimeout(
      () => {
        if (this.preloader) {
          setTimeout(
            () => {
              this.preloader.nativeElement.childNodes[0].setAttribute('style', "visibility  :" + 'hidden');
            },
            200
          );
        }
        this.preloader.nativeElement.setAttribute('style', "height :" + '0px');
      },
      600
    );
  }

}
