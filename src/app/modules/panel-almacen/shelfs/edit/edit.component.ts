import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShelfsTransformService } from '../services/shelfs-transform.service';
import { ShelfsCrudService } from 'src/app/shared/services/shelfs/shelfs-crud.service';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ShelfsFormComponent } from '../shelfs-form/shelfs-form.component';
import { ShelfsResponse } from 'src/app/shared/services/shelfs/resquests/shelfsResponse';
import { Utils } from '@shared/services/common/utils';

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
  @ViewChild('form') form: ShelfsFormComponent;
  formData: FormGroup;
  id: string;
  response: ShelfsResponse
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
      description:[]
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

  submit():void {
    console.log(this.formData.value);

    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
      // show loading
      this.dialogLoading.setDisplay(true);
      // get form
      const form = this.formData.getRawValue();
      // transform form to request
      const request = this.shelfsTransformService.toUpdateShelfsDto(form);
      // delete properties empty
      const partialRrequest = Utils.updatePartial(request);
      this.shelfsCrudService.update(partialRrequest, this.id).subscribe(
        (response) => {
          this.dialogLoading.setDisplay(false);
          this.dialogSuccess.setDisplay(true);
        }, (error) => {
          console.log(error);
          this.dialogLoading.setDisplay(false);
          this.dialogError.setDisplay(true, error);
        }
      );
  }

  getItem(id: string) :void{
    this.shelfsCrudService.getOne(id).subscribe(
      (response: any) => {
        this.response = response;
        const form = this.shelfsTransformService.toCreateShelfsDto(response);
        this.formData.patchValue(form);
        // this.formData.controls.facilityId.setValue(response.facility.name);
      }, (error) => {
        console.log(error);
        this.dialogLoading.setDisplay(false);
        this.dialogErrorFindItem.setDisplay(true, error);
      }
    );
  }

  back():void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  validName():any {

  }

}
