import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldValidatorsService } from '@core/services/field-validators.service';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { EqualsPassword } from '@shared/validations/equals-password.directive';
import { UsersService } from '@shared/services/users/users.service';
import { TranslateService } from '@ngx-translate/core';
import { UserForm } from '../../models/userForm';
import { CreateUserRequests } from '@shared/services/users/requests/createUserRequests';
import { UserResponse } from '@shared/services/users/responses/userResponse';
import { UsersTransformService } from '../../services/users-transform.service';
import { FileService } from '@shared/services/files/file.service';
import { FileResponse } from '@shared/services/files/response/file.response';
import { JwtService } from '@core/services/jwt.service';
// import { StreamCompanyIdService } from '@shared/services/common/stream-company-id.service';
import { catchError, finalize, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
  formData: FormGroup;
  libraryTranslate = 'UsersModule.addComponent.';
  idCompany: string = '';
  isDisabled: boolean = false;
  constructor(
    private location: Location,
    private fb: FormBuilder,
    public validateErrors: FieldValidatorsService,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private usersTransformService: UsersTransformService,
    private fileService: FileService,
    private jwtService: JwtService,
    // private streamCompanyIdService: StreamCompanyIdService
  ) { }

  ngOnInit(): void {
    // this.getCurrentCompany();
    this.declareForm();

  }
  declareForm() {

    this.formData = this.fb.group({
      // email: [, [Validators.required]],
      password: ['', [Validators.required]],
      // passwordConfirm: ['', [Validators.required]],
      // userSCADA: [''],
      // passwordSCADA: [''],
      // passwordConfirmSCADA: [''],
      profile: ['', [Validators.required]],
      // name: ['', [Validators.required]],
      // lastName: ['', [Validators.required]],
      // operator: [false, []],
      // secondLastName: ['', [Validators.required]],
      // jobTitle: ['', [Validators.required]],
      // telephoneNumber: ['', [Validators.required]],
      username: [{ value: null, disabled: true }],
      image: this.fb.group({
        file: [],
        name: [],
        type: [],
        url: ''
      }),
      imageId: [''],
    },
    // {
    //   validators: [
    //     EqualsPassword(['password'], ['passwordConfirm']),
    //     EqualsPassword(['passwordSCADA'], ['passwordConfirmSCADA']),
    //   ]
    // }
    );
  }
  // getCurrentCompany() {
  //   this.streamCompanyIdService.getCurrentCompany(this.route).subscribe(
  //     (idCompany) => {
  //       this.idCompany = idCompany;
  //     }
  //   );
  // }
  submit() {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    // show dialog loading
    this.dialogLoading.setDisplay(true);
    this.isDisabled = true;

    if (this.formData.value.image.file) {
      let formData = new FormData();
      formData.append('file', this.formData.value.image.file);
      this.fileSave(formData, this.formData.value.imageId);
    } else {
      this.createUser();
    }

  }
  fileSave(file: FormData, imageId: string = '') {
    this.fileService.imageSave(file, imageId).subscribe(
      (response: FileResponse) => {
        this.formData.get('imageId').patchValue(response.id);
        this.createUser();
      }, (error: any) => {
        console.log(error);
      }
    )
  }
  createUser() {
    // get values of form
    const form: UserForm = this.formData.getRawValue();
    // tranform values of form to values of request
    const createUserRequest: CreateUserRequests = this.usersTransformService.toCreateUserRequest(this.idCompany, form);
    // send request
    this.usersService.create(createUserRequest).subscribe(
      (response: UserResponse) => {
        this.dialogLoading.setDisplay(false);
        this.dialogSuccess.setDisplay(true, response);
        this.isDisabled = false;
      }, (error) => {
        this.dialogLoading.setDisplay(false);
        this.dialogError.setDisplay(true, error);
        this.isDisabled = false;

      }
    );
  }
/*   validEmail(control: AbstractControl): any {
    return this.usersService.getByEmail(`email=${control.value}`).pipe(
      map((response) => {
        return (response.length === 0)
        ? null
        : { alreadyTaken: true}
      }
      ),
      catchError(err => {
        return of([]);
      }),
      finalize(() => null)
    );
  } */
  /**
   * Muestra el mensaje de alerta
   */
  back() {
    this.location.back();
  }
}
