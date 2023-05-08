import { Component, OnInit } from '@angular/core';
import { InventoryRow } from '../models/inventory-row';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  columnsTable: TableHead<InventoryRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '20px', align: 'center', custom: false },
    { header: 'Almacen', field: 'almacen', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Anaquel', field: 'anaquel', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Materia Prima', field: 'materiaPrima', width: '90px', maxWidth: '140px', align: 'center' },
    { header: 'Cantidad', field: 'cantidad', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Id unico de paquete', field: 'idUnicoPaquete', width: '90px', maxWidth: '120px', align: 'center' },
    { header: 'Editar', field: 'edit', width: '60px', maxWidth: '80px', align: 'center', custom: true, permit: 'write' },
    { header: 'Fecha de caducidad', field: 'fechaCaducidad', width: '90px', maxWidth: '110px', align: 'center' },
    { header: 'Estado', field: 'status', width: '60px', maxWidth: '80px', align: 'center', custom: true },

  ];
  listItems: InventoryRow[] = [{
    index: 1,
    almacen: 'ALM-01',
    anaquel: 'ANQL-01',
    materiaPrima: 'MTP-01',
    cantidad: 2,
    idUnicoPaquete: '45896-0324-5632',
    fechaCaducidad: '12-03-2023',
    edit: null,
    status: true
  },
  {
    index: 2,
    almacen: 'ALM-02',
    anaquel: 'ANQL-02',
    materiaPrima: 'MTP-02',
    cantidad: 10,
    idUnicoPaquete: '9653-55454-4512',
    fechaCaducidad: '15-03-2023',
    edit: null,
    status: true
  },{
    index: 3,
    almacen: 'ALM-05',
    anaquel: 'ANQL-01',
    materiaPrima: 'MTP-02',
    cantidad: 100,
    idUnicoPaquete: '6524-5632-56544',
    fechaCaducidad: '25-03-2023',
    edit: null,
    status: false
  },{
    index: 4,
    almacen: 'ALM-03',
    anaquel: 'ANQL-03',
    materiaPrima: 'MTP-04',
    cantidad: 50,
    idUnicoPaquete: '63963-14523-4563',
    fechaCaducidad: '02-04-2023',
    edit: null,
    status: false
  }];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }
  // selectedEditConfirm(item:InventoryRow): void {
  //   console.log('vars',item);
  //   this.router.navigate(['./edit',item?.id], { relativeTo: this.route });
  // }
  // selectedCreate(): void {
  //   this.router.navigate(['./add'], { relativeTo: this.route });
  // }

}
