import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShelfsTransformService } from '../services/shelfs-transform.service';
import { ShelfsCrudService } from 'src/app/shared/services/shelfs/shelfs-crud.service';
import { DialogConfirmComponent } from 'src/app/shared/modules/dialogs/components/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { ShelfsFormComponent } from '../shelfs-form/shelfs-form.component';
import { ShelfsResponse } from 'src/app/shared/services/shelfs/resquests/shelfsResponse';

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
      descripcion:[]
    })
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
