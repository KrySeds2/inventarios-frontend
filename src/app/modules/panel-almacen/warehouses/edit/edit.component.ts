import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogConfirmComponent } from 'src/app/shared/modules/dialogs/components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { WarehousesFormComponent } from '../warehouses-form/warehouses-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WarehousesResponse } from 'src/app/shared/services/warehouses/responses/warehousesResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { WarehousesTransformService } from '../services/warehouses-transform.service';
import { WarehousesCrudService } from 'src/app/shared/services/warehouses/warehouses-crud.service';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

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
  ngOnInit(): void {
  }

  submit():void {

  }

  getItem(id: string) :void{

  }

  back():void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  validName():any {

  }

}
