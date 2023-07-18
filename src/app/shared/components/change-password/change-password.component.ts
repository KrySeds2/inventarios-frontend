import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ConfigViewError } from '@shared/modules/dialogs/view-error/view-error.component';
import { UserResponse } from '@shared/services/users/responses/userResponse';
import { UsersService } from '@shared/services/users/users.service';
import { EqualsPassword } from '@shared/validations/equals-password.directive';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  libraryTranslate = 'changePassword.';
  @ViewChild('dialogChangePassword') dialogChangePassword: DialogConfirmComponent;
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogWarning') dialogWarning: DialogConfirmComponent;
  @ViewChild('loading') loading: LoadingComponent;

  @ViewChild('dialogError') dialogError: DialogErrorComponent;

  configError: ConfigViewError = {
    code: '500',
    message: '--'
  };
  formData: FormGroup;
  userResponse: UserResponse;
  constructor(
    private translate: TranslateService,
    public validateErrors: ValidateFieldService,
    private fb: FormBuilder,
    private userSv: UsersService) {
    this.formData = this.fb.group({
      password: [, [Validators.required]],
      passwordConfirm: []
    }, {
      validators: EqualsPassword(['password'], ['passwordConfirm'])
    });
  }

  ngOnInit(): void {
  }
  submit(): void {
    console.log(this.formData.value);
    if (!this.formData.valid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.dialogChangePassword.setDisplay(false);
    this.loading.setDisplay(true);
    const request: any = {
      password: this.formData.value?.password,
    };
    this.userSv.resetPassword(request).subscribe(
      (response: any) => {
        this.loading.setDisplay(false);
        this.dialogSuccess.setDisplay(true);
      }, (error: any) => {
        console.log(error);
        this.configError = {
          code: error?.status,
          message: error?.message + ' message error: ' + error?.error?.message
        };
        this.loading.setDisplay(false);
        this.dialogError.setDisplay(true, error);

      }
    );
  }

  setDialog(value, userResponse: UserResponse): void {
    this.userResponse = userResponse;
    this.dialogChangePassword.setDisplay(value, userResponse);
  }
  /**
   * Muestra el mensaje de alerta
   */
  back(): void {
    this.dialogWarning.setDisplay(true);
  }
  /**
   * Regresa a la pagina anterior
   */
  backPrevius(): void {
    this.dialogChangePassword.setDisplay(true);
    // this.dialogError.toggleDialog(false);
  }

  cancel(value): void {
    this.dialogChangePassword.setDisplay(true);

  }

}
