
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/loading/loading.component';
import { Login } from 'src/app/core/services/login.model';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { EncrDecrServiceService } from 'src/app/core/services/encr-decr-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  libraryTranslate = 'AuthenticationModule.login.';
  @ViewChild('displayLoading') loadingComponent: LoadingComponent;
  title = 'EL COMPLEMENTO PERFECTO DE TU TERMINAL';
  user: Login;
  errorLogin = false;
  customError = false;
  formLogin: FormGroup;
  customErrorData = {
    message:'',
    url:''
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private usersService: UsersService,
    private crypto: EncrDecrServiceService,
    ) {

    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });



  }

  ngOnInit() {
  }

  login() {
    if (this.formLogin.invalid) {
      return;
    }
    this.loadingComponent.setDisplay(true);
    let { username, password } = this.formLogin.value;
    this.user = {
      email: username,
      password
    }

    // this.router.navigateByUrl('/interface');
    this.auth.login(this.user).subscribe(resp => {
      console.log('login',resp);
      this.router.navigateByUrl('/modules');
    }, (err) => {
      console.log('err',err);
      if(err.error.statusCode == 401){
      this.errorLogin = true;
      }
      if(err.error.statusCode == 403){
        this.errorLogin = false;
        this.customError = true;
        this.customErrorData = {
          message:'Cuenta bloqueada. contacta a tu administrador',
          url:''
        }
      }
      this.loadingComponent.setDisplay(false);
      // this.errorLogin = true;
    });
  }



}
