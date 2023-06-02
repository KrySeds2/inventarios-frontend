import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogConfirmComponent } from 'src/app/shared/modules/dialogs/components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { RawMaterialsFormComponent } from '../raw-materials-form/raw-materials-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RawMaterialsResponse } from 'src/app/shared/services/raw-materials/responses/rawMaterialsResponse';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RawMaterialsTransformService } from '../services/raw-materials-transform.service';
import { RawMaterialsCrudService } from 'src/app/shared/services/raw-materials/raw-materials-crud.service';

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
  @ViewChild('form') form: RawMaterialsFormComponent;
  formData: FormGroup;
  id: string;
  response: RawMaterialsResponse
  constructor(
    // private jwtService: JwtService,
    private fb: FormBuilder,
    public validateErrors: ValidateFieldService,
    private route: ActivatedRoute,
    private router: Router,
    private rawMaterialsTransformService: RawMaterialsTransformService,
    private rawMaterialsCrudService: RawMaterialsCrudService
  ) {
    this.declareForm();
  }

  declareForm() :void{
    this.formData = this.fb.group({
      name: [, [Validators.required]],
      idUnicoEscanear: [, [Validators.required]],
      descripcion: []
    })
  }

  ngAfterViewInit():void {

  }

  ngOnInit(): void {
  }

  submit():void {

  }

  getItem(id: string) :void{

  }

  back():void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  validName():any {

  }

}
