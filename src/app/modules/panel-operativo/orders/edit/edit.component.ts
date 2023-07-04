import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersTransformService } from '../services/orders-transform.service';
import { OrdersCrudService } from '@shared/services/orders/orders-crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
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
}
