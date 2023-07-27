import { Component, OnInit } from '@angular/core';
import { RawMaterialsRow } from '../models/rawMaterialsRow';
import { TableHead } from '@shared/modules/tables/models/tableHead';

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {
  rowsTable: RawMaterialsRow[] = [];
  columnsTable: TableHead<RawMaterialsRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '20px', align: 'center', custom: false },
    { header: 'Codigo de paqute', field: 'codePackage', width: '50px',maxWidth: '50px', align: 'center' },
    { header: 'Cantidad', field: 'amount', width: '50px', maxWidth: '50px', align: 'center'},
    { header: 'Fecha de caducidad', field: 'dateOfExpiry', width: '50px', maxWidth: '50px', align: 'center'},
    { header: 'Almacen', field: 'warehouse', width: '50px', maxWidth: '50px', align: 'center'},
    { header: 'Anaquel', field: 'shelfs', width: '50px', maxWidth: '50px', align: 'center'},
    // { header: 'Editar', field: 'edit', width: '50px', maxWidth: '50px', align: 'center', custom: true, permit: 'write' },
    // { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '50px', align: 'center', custom: true },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
