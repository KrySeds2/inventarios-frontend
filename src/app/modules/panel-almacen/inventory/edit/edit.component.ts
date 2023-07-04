import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogConfirmComponent } from 'src/app/shared/modules/dialogs/components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { InventoryFormComponent } from '../inventory-form/inventory-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryResponse } from 'src/app/shared/services/inventory/responses/inventoryResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryTransformService } from '../services/inventory-transform.service';
import { InventoryCrudService } from 'src/app/shared/services/inventory/inventory-crud.service';
import { Utils } from 'src/app/shared/services/common/utils';
import { InventoryFormModel } from '../models/inventoryFormModel';

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
  @ViewChild('form') form: InventoryFormComponent;
  formData: FormGroup;
  id: string;
  response: InventoryResponse
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private inventoryTransformService: InventoryTransformService,
    private inventoryCrudService: InventoryCrudService
  ) {
    this.declareForm();
  }

  declareForm(): void {
    this.formData = this.fb.group({
      almacen:[,[Validators.required]],
      anaquel:[,[Validators.required]],
      materiaPrima:[,[Validators.required]],
      idPaquete:[,[Validators.required]],
      fecha:[,[Validators.required]],
      cantidad:[,[Validators.required]],
    })
  }
  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formData.value);

    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.dialogLoading.setDisplay(true);
    // const form: ShiftsFormModel = this.formData.getRawValue();
    let request:InventoryFormModel = {
      almacen:this.formData.value.name,
      anaquel: this.formData.value.idUnicoEscanear,
      idUnicoMateriaPrima:this.formData.value.descripcion,
      idUnicoPaquete:this.formData.value.idUnicoPaquete,
      fechaCaducidad:this.formData.value.fechaCaducidad,
      cantidad:this.formData.value.cantidad,
    }

    const form = this.formData.getRawValue();
    // const request =this.shiftsTransformService.updateShiftsDto(form)
    const partialRequest = Utils.updatePartial(request);

    this.inventoryCrudService.update(partialRequest,this.id).subscribe(
      (response) => {
        this.dialogLoading.setDisplay(false);
        this.dialogSuccess.setDisplay(true, response);
      }, (error) => {
        this.dialogLoading.setDisplay(false);
        this.dialogError.setDisplay(true, error);
      }
    );
  }

  getItem(id: string): void {
    this.inventoryCrudService.getOne(id).subscribe(
      (resp) => {
        this.response=resp;
        const form = this.inventoryTransformService.toInventoryFormModel(resp);
        this.formData.patchValue(form);
        // this.formData.patchValue({
        //   name:response.name,
        //   isLastWorkShift: response.isLastWorkShift,
        //   initTime:response.initTime,
        //   endTime:response.endTime,
        //   companyId:this.facilityId
        // });
      }, (error) => {
        console.log(error);
        this.dialogLoading.setDisplay(false);
        this.dialogErrorFindItem.setDisplay(true, error);
      }
    );
  }

  back(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  validName(): any {

  }
}
