import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RawMaterialsTransformService } from '../services/raw-materials-transform.service';
import { RawMaterialsCrudService } from 'src/app/shared/services/raw-materials/raw-materials-crud.service';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { RawMaterialsFormModel } from '../models/rawMaterialsFormModel';
import { CreateRawMaterialsDto } from 'src/app/shared/services/raw-materials/requests/createRawMaterialsDto';
import { DialogConfirmComponent } from 'src/app/shared/modules/dialogs/components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';

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
    // private jwtService: JwtService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rawMaterialsTransformService: RawMaterialsTransformService,
    private rawMaterialsCrudService: RawMaterialsCrudService
  ) {
    this.declareForm();
  }

  declareForm():void{
    this.formData = this.fb.group({
      name:[,[Validators.required,Validators.maxLength(64)]],
      scaneId:[,[Validators.required]],
      description:[,[Validators.required]],
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

    const form: RawMaterialsFormModel = this.formData.getRawValue();
    const createShiftsDto: CreateRawMaterialsDto = this.rawMaterialsTransformService.toCreateRawMaterialsDto(form);

    let request:RawMaterialsFormModel = {
      name:this.formData.value.name,
      scaneId: this.formData.value.scaneId,
      description:this.formData.value.description,

    }

    this.rawMaterialsCrudService.create(request).subscribe(
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
