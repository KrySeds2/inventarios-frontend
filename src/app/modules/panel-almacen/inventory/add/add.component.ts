import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryTransformService } from '../services/inventory-transform.service';
import { InventoryCrudService } from 'src/app/shared/services/inventory/inventory-crud.service';

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
    private inventoryTransformService: InventoryTransformService,
    private inventoryCrudService: InventoryCrudService
  ) {
    this.declareForm();
  }

  declareForm():void{
    this.formData = this.fb.group({
      almacen:[,[Validators.required]],
      anaquel:[,[Validators.required]],
      materiaPrima:[,[Validators.required]],
      idPaquete:[,[Validators.required]],
      fecha:[,[Validators.required]],
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
