import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryTransformService } from '../services/inventory-transform.service';
import { InventoryCrudService } from 'src/app/shared/services/inventory/inventory-crud.service';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { DialogConfirmComponent } from 'src/app/shared/modules/dialogs/components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { InventoryFormModel } from '../models/inventoryFormModel';
import { CreateInventoryDto } from 'src/app/shared/services/inventory/requests/createInventoryDto';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  formData: FormGroup;
  isDisabled: boolean=false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private inventoryTransformService: InventoryTransformService,
    private inventoryCrudService: InventoryCrudService
  ) {
    this.declareForm();
  }

  declareForm():void{
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

  submit(){
    console.log(this.formData.value);

    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    this.dialogLoading.setDisplay(true);
    this.isDisabled = true;

    const form: InventoryFormModel = this.formData.getRawValue();
    const createInventoryDto: CreateInventoryDto = this.inventoryTransformService.toCreateInventoryDto(form);

    let request:InventoryFormModel = {
      almacen:this.formData.value.name,
      anaquel: this.formData.value.idUnicoEscanear,
      idUnicoMateriaPrima:this.formData.value.descripcion,
      idUnicoPaquete:this.formData.value.idUnicoPaquete,
      fechaCaducidad:this.formData.value.fechaCaducidad,
      cantidad:this.formData.value.cantidad,
      // id:this.formData.value.id
    }

    this.inventoryCrudService.create(request).subscribe(
      (response: any) => {
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

  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
