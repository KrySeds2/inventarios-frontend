import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { EqualsPassword } from '@shared/validations/equals-password.directive';
import { FieldValidatorsService } from 'src/app/core/services/field-validators.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {

  username:string
  formDataUser:FormGroup
  formDataCode:FormGroup
  formDataPassword:FormGroup
  currentStep:number = 1;
  cardHeader:string = 'Recuperar cuenta';
  loading:boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb:FormBuilder,
    public validateErrors: FieldValidatorsService,
    private auth: AuthService,
    ) {
      this.formDataUser = this.fb.group(
        {
          username:['',Validators.required]
        }
      )

      this.formDataCode = this.fb.group(
        {
          code:['',Validators.required]
        }
      )

      this.formDataPassword =  this.fb.group({
        password: [, [Validators.required]],
        passwordConfirm: []
      }, {
        validators: EqualsPassword(['password'], ['passwordConfirm'])
      });
    }

  ngOnInit(): void {
  }

  generateCode(){
    if (!this.formDataUser.valid) {
      this.formDataUser.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.auth.recover(this.formDataUser.value.username).subscribe(
      (response:any)=>{
        setTimeout(() => {
          this.currentStep = 2;
          this.cardHeader = 'Ingresar codigo de verificación';
          this.loading = false;

        }, 1000);

      },(error:any)=>{
        setTimeout(() => {
          this.currentStep = 2;
          this.cardHeader = 'Ingresar codigo de verificación';
          this.loading = false;
        }, 1000);
      }
    )
  }

  validateCode(){
    if (!this.formDataCode.valid) {
      this.formDataCode.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.auth.recoverValidator(this.formDataUser.value.username,this.formDataCode.value.code).subscribe(
      (response:any)=>{
        setTimeout(() => {
          this.currentStep = 3;
          this.cardHeader = 'Actualizar contraseña';
          this.loading = false;

        }, 1000);

      },(error:any)=>{
        setTimeout(() => {
          this.currentStep = 3;
          this.cardHeader = 'Actualizar contraseña';
          this.loading = false;
        }, 1000);
      }
    )

  }

  updatePassword(){
    if (!this.formDataPassword.valid) {
      this.formDataPassword.markAllAsTouched();
      return;
    }
  }

  cancel(){
    this.router.navigate(['../login'], { relativeTo: this.route });
  }

}
