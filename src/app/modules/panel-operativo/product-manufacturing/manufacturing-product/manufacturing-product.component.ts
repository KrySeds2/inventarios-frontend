import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';

@Component({
  selector: 'app-manufacturing-product',
  templateUrl: './manufacturing-product.component.html',
  styleUrls: ['./manufacturing-product.component.scss']
})
export class ManufacturingProductComponent implements OnInit {
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  formData: FormGroup;
  constructor( private fb: FormBuilder,) {
    this.declareForm();
   }

  declareForm():void{
    this.formData = this.fb.group({
      requiredCount:[,[Validators.required]],
      rawMaterial:[,[Validators.required]],
      scanCount:[,[Validators.required]],
      packageCode:[,[Validators.required]]
    })
  }
  ngOnInit(): void {
  }

}
