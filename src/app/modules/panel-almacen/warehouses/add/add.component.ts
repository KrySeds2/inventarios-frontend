import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WarehousesTransformService } from '../services/warehouses-transform.service';
import { WarehousesCrudService } from 'src/app/shared/services/warehouses/warehouses-crud.service';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { WarehousesFormModel } from '../models/warehousesFormModel';
import { CreateWarehousesDto } from '@shared/services/warehouses/requests/createWarehousesDto';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  formData: FormGroup;
  isDisabled: boolean=false;
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private warehousesTransformService: WarehousesTransformService,
    private warehousesCrudService: WarehousesCrudService
  ) {
    this.declareForm();
  }

  declareForm():void{
    this.formData = this.fb.group({
      name:[,[Validators.required]],
      description:[,[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formData.value);

    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.dialogLoading.setDisplay(true);
    this.isDisabled = true;

    const form:WarehousesFormModel = this.formData.getRawValue();
    const createShiftsDto: CreateWarehousesDto = this.warehousesTransformService.toWarehousesFormModel(form);

    let request:WarehousesFormModel = {
      name:this.formData.value.name,
      description: this.formData.value.description,
      id: this.formData.value.id,
      shelves:this.formData.value.shelves

    }

    this.warehousesCrudService.create(request).subscribe(
      (response: any) => {
        this.dialogLoading.setDisplay(false);
        this.isDisabled = false;
      }, (error) => {
        this.dialogLoading.setDisplay(false);
        this.dialogError.setDisplay(true, error);
        this.isDisabled = false;
      }
    );
  }

  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
