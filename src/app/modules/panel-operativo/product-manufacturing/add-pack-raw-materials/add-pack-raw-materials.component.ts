import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableHead } from '@shared/modules/tables/models/tableHead';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { ProductManufacturingRow } from '../models/productManufacturingRow';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-pack-raw-materials',
  templateUrl: './add-pack-raw-materials.component.html',
  styleUrls: ['./add-pack-raw-materials.component.scss']
})
export class AddPackRawMaterialsComponent implements OnInit {
  @Input() formData: FormGroup;
  rowsTable: ProductManufacturingRow[] = [];
  columnsTable: TableHead<ProductManufacturingRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '20px', align: 'center', custom: false },
    { header: 'Producto', field: 'product', width: '50px',maxWidth: '50px', align: 'center' },
    { header: 'Cantidad/usar', field: 'amount', width: '50px', maxWidth: '50px', align: 'center'},
    { header: 'Codigo de paquete', field: 'packageCode', width: '50px', maxWidth: '50px', align: 'center'},
    // { header: 'Editar', field: 'edit', width: '50px', maxWidth: '50px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '50px', align: 'center', custom: true },
  ];
  constructor( public validateErrors: ValidateFieldService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  materiaPrima() {
    // const folio = this.formData.get('folio').value;
    this.router.navigate(['./raw-material-required'],{ relativeTo: this.route });
  }
  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
