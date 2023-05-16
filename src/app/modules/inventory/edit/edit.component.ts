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

  }

  getItem(id: string): void {

  }

  back(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  validName(): any {

  }
}
