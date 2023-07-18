import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShelfsTransformService } from '../services/shelfs-transform.service';
import { ShelfsCrudService } from 'src/app/shared/services/shelfs/shelfs-crud.service';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ShelfsFormModel } from '../models/shelfsFormModel';
import { CreateShelfsDto } from '@shared/services/shelfs/responses/createShelfsDto';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';

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
    private shelfsTransformService: ShelfsTransformService,
    private shelfsCrudService: ShelfsCrudService
  ) {
    this.declareForm();
  }

  declareForm():void{
    this.formData = this.fb.group({
      name:[,[Validators.required]],
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

    const form: ShelfsFormModel = this.formData.getRawValue();
    const createShiftsDto: CreateShelfsDto = this.shelfsTransformService.toCreateShelfsDto(form);

    let request:ShelfsFormModel = {
      name:this.formData.value.name,

      description:this.formData.value.description,

    }

    this.shelfsCrudService.create(request).subscribe(
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
