import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { UserResponse } from '@shared/services/users/responses/userResponse';
import { UsersService } from '@shared/services/users/users.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  libraryTranslate = 'mainLayout.';
  @ViewChild('dialogChangePassword') dialogChangePassword: ChangePasswordComponent;
  title: string = 'TAS360';
  @ViewChild('preloader') preloader: ElementRef;
  eventAllSubscription: Subscription;
  companyLogo: string = environment.noImage;
  items: any[];
  userName: string = '';
  fullName: string = '';
  userImage: string = environment.noImage;
  companyPublicKey: string = '';
  profile: any = '';
  constructor(
    private router: Router,
    private auth: AuthService,
    private user: UsersService,
    // private jwtService: JwtService,
    // private routes: RoutesService,
    private translate: TranslateService,
    // private socketGetwayService: SocketGetwayService,
  ) { }
  ngAfterViewInit(): void {
    this.loadingDisplayBackground();
  }

  ngOnInit(): void {
    this.user.getProfileUser().subscribe(
      (response) => {
        this.fullName = response.name + ' ' + response.firstName;
        this.userName = response.email;
        this.userImage = (response.imageId) ? environment.image + response.imageId : environment.noImage;
        // this.companyLogo = (response.company.imageId) ? environment.image + response.company.imageId : environment.noImage;
        // const typeCompany = {
        //   [CompanyType.MAIN]: ZoneType.MAIN,
        //   [CompanyType.CARRIER]: ZoneType.CARRIER,
        //   [CompanyType.CLIENT]: ZoneType.CLIENT,
        //   [CompanyType.LABORATORY]: ZoneType.LABORATORY,
        //   [CompanyType.MARKETER]: ZoneType.MARKETER,
        //   [CompanyType.FACILITY]: ZoneType.FACILITY,
        // };
        // if (typeCompany[response.company.companyType]) {
        //   this.routes.getModuleSideBar(typeCompany[response.company.companyType]).subscribe(
        //     (response) => {
        //       this.items = response;
        //     }
        //   );
        // }
        this.validChangePasswordUser(response);
      }
    );

    // this.eventAllSubscription = this.socketGetwayService.listenEvent<any>('LOGOUT-'+this.jwtService.userInfo().id).subscribe(
    //   () => {
    //     alert('Se ha desactivado la cuenta');
    //     this.logout();
    //   }
    // );
  }

  ngOnDestroy(): void {
    this.eventAllSubscription.unsubscribe();
  }
  logout(): void {
    this.auth.logout();
    console.log("send close");
    // hermes.send('reload-session', 1);
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
  validChangePasswordUser(user: UserResponse) {
    if (user.needUpdatePass) {
      this.dialogChangePassword.setDialog(true, user);
    }
  }
}
