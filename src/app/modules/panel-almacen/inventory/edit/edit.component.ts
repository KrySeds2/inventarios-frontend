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
      wareh:[,[Validators.required]],
      shelf:[,[Validators.required]],
      rawMaterial_:[,[Validators.required]],
      idPaquete:[,[Validators.required]],
      dateOfExpiry:[,[Validators.required]],
      amount:[,[Validators.required]],
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
      warehId:this.formData.value.wareh,
      shelfId: this.formData.value.idUnicoEscanear,
      rawMaterialId:this.formData.value.descripcion,
      idUnicoPaquete:this.formData.value.idUnicoPaquete,
      dateOfExpiry:this.formData.value.fechaCaducidad,
      amount:this.formData.value.cantidad,
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
        // const form = this.inventoryTransformService.toInventoryFormModel(resp);
        // this.formData.patchValue(form);
        this.formData.patchValue({
          rawMaterial_:this.response.rawMaterial_,
          amount:this.response.amount,
          dateOfExpiry:this.response.dateOfExpiry,
          idUnicoPaquete:this.response.idUnicoPaquete,
          shelf:this.response.shelf,
          status:this.response.status,
          wareh:this.response.wareh,
        });
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
