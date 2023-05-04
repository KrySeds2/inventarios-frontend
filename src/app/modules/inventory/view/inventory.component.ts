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
    { header: 'N°', translate:  ``, field: 'position', width: '20px',maxWidth: '20px', align: 'center', custom: false },
    { header: 'Almacen', field: 'almacen', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Anaquel', field: 'anaquel', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Materia Prima', field: 'materiaPrima', width: '90px', maxWidth: '140px', align: 'center' },
    { header: 'Cantidad', field: 'cantidad', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Id unico de paquete', field: 'idUnicoPaquete', width: '90px', maxWidth: '120px', align: 'center' },
    { header: 'Fecha de caducidad', field: 'fechaCaducidad', width: '90px', maxWidth: '110px', align: 'center' },
    { header: 'Editar', field: 'edit', width: '60px', maxWidth: '80px', align: 'center', custom: true, exportable: false, permit: 'write'},
    { header: 'Estado', field: 'status', width: '60px', maxWidth: '80px', align: 'center', custom: true, exportable: false},

  ];
  listItems: InventoryRow[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.listItems = [
      { index: 1,position:1, almacen: 'Almacén 1', anaquel: 'Anaquel A', materiaPrima: 'Materia Prima 1', cantidad: 10, idUnicoPaquete: '123', fechaCaducidad: '2023-05-02', edit: null, status: true },
      { index: 2,position:2, almacen: 'Almacén 2', anaquel: 'Anaquel B', materiaPrima: 'Materia Prima 2', cantidad: 5, idUnicoPaquete: '1234', fechaCaducidad: '2023-06-15', edit: null, status: false },

      // Agrega más elementos de muestra aquí
    ];
  }

  selectedCreate(): void {
    this.router.navigate(['./add'], { relativeTo: this.route });
  }

}
