import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogConfirmComponent } from 'src/app/shared/modules/dialogs/components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { RawMaterialsFormComponent } from '../raw-materials-form/raw-materials-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RawMaterialsResponse } from 'src/app/shared/services/raw-materials/responses/rawMaterialsResponse';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RawMaterialsTransformService } from '../services/raw-materials-transform.service';
import { RawMaterialsCrudService } from 'src/app/shared/services/raw-materials/raw-materials-crud.service';
import { RawMaterialsFormModel } from '../models/rawMaterialsFormModel';
import { Utils } from 'src/app/shared/services/common/utils';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogErrorFindItem') dialogErrorFindItem: DialogErrorComponent;
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
  @ViewChild('form') form: RawMaterialsFormComponent;
  formData: FormGroup;
  id: string;
  response: RawMaterialsResponse
  constructor(
    // private jwtService: JwtService,
    private fb: FormBuilder,
    public validateErrors: ValidateFieldService,
    private route: ActivatedRoute,
    private router: Router,
    private rawMaterialsTransformService: RawMaterialsTransformService,
    private rawMaterialsCrudService: RawMaterialsCrudService
  ) {
    this.declareForm();
  }

  declareForm() :void{
    this.formData = this.fb.group({
      nombre: [, [Validators.required]],
      idunicoesc: [, [Validators.required]],
      description: []
    })
  }

  ngAfterViewInit():void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params["id"];
        console.log(params["id"])
        this.getItem(this.id);
      }
    );
  }

  ngOnInit(): void {
  }

  submit():void {
    console.log(this.formData.value);

    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
      // show loading
      this.dialogLoading.setDisplay(true);
      // get form
      const form = this.formData.getRawValue();
      // transform form to request
      const request = this.rawMaterialsTransformService.updateRawMaterialsDto(form);
      // delete properties empty
      const partialRrequest = Utils.updatePartial(request);
      this.rawMaterialsCrudService.update(partialRrequest, this.id).subscribe(
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

  getItem(id: string) :void{
    this.rawMaterialsCrudService.getOne(id).subscribe(
      (response: any) => {
        this.response = response;
        const form = this.rawMaterialsTransformService.toRawMaterialsFormModel(response);
        this.formData.patchValue(form);
        // this.formData.controls.facilityId.setValue(response.facility.name);
      }, (error) => {
        console.log(error);
        this.dialogLoading.setDisplay(false);
        this.dialogErrorFindItem.setDisplay(true, error);
      }
    );
  }

  back():void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  validName():any {

  }

}
