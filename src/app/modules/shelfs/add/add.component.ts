import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShelfsTransformService } from '../services/shelfs-transform.service';
import { ShelfsCrudService } from 'src/app/shared/services/shelfs/shelfs-crud.service';

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

  submit(){

  }

  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
