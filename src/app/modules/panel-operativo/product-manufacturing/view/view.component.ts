import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @Input() formData: FormGroup;
  folio: string;
  constructor(
    private fb: FormBuilder,
     public validateErrors: ValidateFieldService,
     private router: Router,
     private route: ActivatedRoute) {
  this.declareForm()
  }
  declareForm():void{
    this.formData = this.fb.group({
      folio:[,[Validators.required]],
      // rawMaterial:[,[Validators.required]],
      // amount:[,[Validators.required]],
    })
  }
  ngOnInit(): void {
    this.folio = this.route.snapshot.paramMap.get('folio');
  }
  buscarPedido() {
    const folio = this.formData.get('folio').value;
    this.router.navigate(['./manufacturing-product', folio],{ relativeTo: this.route });
  }
}
