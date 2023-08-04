import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldValidatorsService } from '@core/services/field-validators.service';
import { ActivatedRoute, Params } from '@angular/router';
import { EqualsPassword } from '@shared/validations/equals-password.directive';
import { Utils } from '@shared/services/common/utils';
import { UsersService } from '@shared/services/users/users.service';
import { UserResponse } from '@shared/services/users/responses/userResponse';
import { UsersTransformService } from '../../services/users-transform.service';
import { FileService } from '@shared/services/files/file.service';
import { FileResponse } from '@shared/services/files/response/file.response';
import { FormComponent } from '../form/form.component';
// import { StreamCompanyIdService } from '@shared/services/common/stream-company-id.service';
import { JwtService } from '@core/services/jwt.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, AfterViewInit {
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
  @ViewChild('form') formComponent: FormComponent;
  formData: FormGroup;
  id: string;
  response: UserResponse;
  libraryTranslate = 'UsersModule.editComponent.';
  constructor(
    private location: Location,
    private fb: FormBuilder,
    public validateErrors: FieldValidatorsService,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private usersTransformService: UsersTransformService,
    private fileService: FileService,
    // private streamCompanyIdService: StreamCompanyIdService,
    private jwtService: JwtService
  ) {
    this.formData = this.fb.group({
      // email: [{ value: null, disabled: true }],
      // userSCADA: [''],
      // passwordSCADA: [''],
      // passwordConfirmSCADA: [''],
      password: [''],
      // passwordConfirm: [''],
      profile: ['', [Validators.required]],
      // name: ['', [Validators.required]],
      // lastName: ['', [Validators.required]],
      // secondLastName: ['', [Validators.required]],
      // jobTitle: ['', [Validators.required]],
      // operator: [false, []],
      username: [{ value: null, disabled: true }],
      // telephoneNumber: ['', [Validators.required]],
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
  ngAfterViewInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        // this.streamCompanyIdService.getCurrentCompany(this.route.parent).subscribe(
        //   (idCompany) => {
        //     this.findOne(this.id);
        //   }
        // );
      }
    );
  }

  ngOnInit(): void {
  }
  submit() {
    if(this.jwtService.userInfo().id === this.response.id){
      alert('No es posible editarte a ti mismo.');
      this.back();
      return;
    }
    console.log(this.formData.value);
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.dialogLoading.setDisplay(true);
    if (this.formData.value.image.file) {
      let formData = new FormData();
      formData.append('file', this.formData.value.image.file);
      this.fileSave(formData, this.formData.value.imageId);
    } else {
      this.updateUser();
    }
  }
  fileSave(file: FormData, imageId: string = '') {
    this.fileService.imageSave(file, imageId).subscribe(
      (response: FileResponse) => {
        this.formData.get('imageId').patchValue(response.id);
        this.updateUser();
      }, (error: any) => {
        console.log(error);
      }
    )
  }
  updateUser() {
    const form = this.formData.getRawValue();
    const request = this.usersTransformService.toUpdateUserRequest(form);
    const partialrequest = Utils.updatePartial(request);
    this.usersService.update(partialrequest, this.id).subscribe(
      (response) => {
        this.dialogLoading.setDisplay(false);
        this.dialogSuccess.setDisplay(true);
      }, (error) => {
        console.log(error);
        this.dialogLoading.setDisplay(false);
        this.dialogError.setDisplay(true, error);
      }
    );
  }
  findOne(id: string) {
    this.usersService.getOne(id).subscribe(
      (response) => {
        this.response = response;
        const form = this.usersTransformService.toUserForm(response);
        this.formData.patchValue(form);
        console.log(this.formComponent.imageComponent)
        this.formComponent.imageComponent.setImage();
      }, (error: any) => {
        console.log(error);
        this.dialogLoading.setDisplay(false);
        this.dialogError.setDisplay(true, error);
      }
    )
  }
  validEmaill(control: AbstractControl): any {
    /*return this.usersService.getByEmail(control.value).pipe(
      map((response) => {
        if (control.value === response.code) {
          return { existed: true };
        }
        return null;
      }
      ),
      catchError(err => {
        return of([]);
      }),
      finalize(() => null)
    );
  }*/
  }
  /**
   * Muestra el mensaje de alerta
   */
  back() {
    this.location.back();
  }
}

