import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { InventoryFormComponent } from '../inventory-form/inventory-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryResponse } from 'src/app/shared/services/inventory/responses/inventoryResponse';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  isDisabled:boolean = false
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
      // idpackage:[,[Validators.required]],
      dateOfExpiry:[,[Validators.required]],
      amount:[,[Validators.required]],
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

  submit(): void {
    console.log(this.formData.value);

    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.dialogLoading.setDisplay(true);
    this.isDisabled = true;

    // let request:InventoryFormModel = {
    //   warehId:this.formData.value.wareh,
    //   shelfId: this.formData.value.idUnicoEscanear,
    //   rawMaterialId:this.formData.value.descripcion,
    //   idpackage:this.formData.value.idpackage,
    //   dateOfExpiry:this.formData.value.fechaCaducidad,
    //   amount:this.formData.value.cantidad,
    // }

    // const form = this.formData.getRawValue();
    // const request =this.inventoryTransformService.toUpdateInventoryDto(form)
    // const partialRequest = Utils.updatePartial(request);

    let request = this.inventoryTransformService.toCreateInventoryDto(this.formData.getRawValue());
    let partialRequest = Utils.updatePartial(request);

    this.inventoryCrudService.update(partialRequest,this.response.id).subscribe(
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
    this.inventoryCrudService.getOne(id).subscribe( resp => {
      this.response = resp;
      this.formData.patchValue(this.inventoryTransformService.toInventoryFormModel(resp))
    }

    );
  }

  back(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  validName(): any {

  }
}
