import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogConfirmComponent } from 'src/app/shared/modules/dialogs/components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { WarehousesFormComponent } from '../warehouses-form/warehouses-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WarehousesResponse } from 'src/app/shared/services/warehouses/responses/warehousesResponse';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WarehousesTransformService } from '../services/warehouses-transform.service';
import { WarehousesCrudService } from 'src/app/shared/services/warehouses/warehouses-crud.service';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { Utils } from '@shared/services/common/utils';

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
  @ViewChild('form') form: WarehousesFormComponent;
  formData: FormGroup;
  id: string;
  response: WarehousesResponse
  constructor(
    private fb: FormBuilder,
    public validateErrors: ValidateFieldService,
    private router: Router,
    private route: ActivatedRoute,
    private warehousesTransformService: WarehousesTransformService,
    private warehousesCrudService: WarehousesCrudService
  ) {
    this.declareForm();
  }

  declareForm() :void{
    this.formData = this.fb.group({
      name: [, [Validators.required]],
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
      const request = this.warehousesTransformService.toUpdateWarehousesDto(form);
      // delete properties empty
      const partialRrequest = Utils.updatePartial(request);
      this.warehousesCrudService.update(partialRrequest, this.id).subscribe(
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
    this.warehousesCrudService.getOne(id).subscribe(
      (response: any) => {
        this.response = response;
        const form = this.warehousesTransformService.toWarehousesFormModel(response);
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
