import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdersTransformService } from '../services/orders-transform.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersCrudService } from 'src/app/shared/services/orders/orders-crud.service';

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
    private ordersTransformService: OrdersTransformService,
    private ordersCrudService: OrdersCrudService
  ) {
    this.declareForm();
  }

  declareForm():void{
    this.formData = this.fb.group({
      folio:[,[Validators.required]],
      producto:[,[Validators.required]],
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
