import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceptionsTransformService } from '../services/receptions-transform.service';
import { ReceptionsCrudService } from 'src/app/shared/services/receptions/receptions-crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  formData: FormGroup;
  isDisabled: boolean=false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private receptionsTransformService: ReceptionsTransformService,
    private receptionsCrudService: ReceptionsCrudService
  ) {
    this.declareForm();
  }
  declareForm():void{
    this.formData = this.fb.group({
      folio:[,[Validators.required]],
      fecha:[,[Validators.required]],
      materiaPrima:[,[Validators.required]],
      cantidad:[,[Validators.required]],

    })
  }
  ngOnInit(): void {
  }

  submit(){

  }

  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
