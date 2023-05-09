import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RawMaterialsTransformService } from '../services/raw-materials-transform.service';
import { RawMaterialsCrudService } from 'src/app/shared/services/raw-materials/raw-materials-crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
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
      name:[,[Validators.required]],
      idUnicoEscanear:[,[Validators.required]],
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
