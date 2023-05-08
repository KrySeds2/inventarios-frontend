import { Component, OnInit } from '@angular/core';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { WarehousesRow } from '../models/warehouses-row';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {
  columnsTable: TableHead<WarehousesRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Nombre', field: 'name', width: '100px', align: 'center' },
    { header: 'Anaqueles', field: 'anaqueles', width: '100px', align: 'center' },
    { header: 'Ver anaqueles', field: 'view', width: '100px', align: 'center',custom: true },
    { header: 'Estado', field: 'status', width: '50px', maxWidth: '90px', align: 'center', custom: true },
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '90px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  listItems: WarehousesRow[] = [{
    index: 1,
    name: 'ALM-1',
    anaqueles: 3,
    status: true,
  },{
    index: 2,
    name: 'ALM-1',
    anaqueles: 4,
    status: true,
  },{
    index: 3,
    name: 'ALM-1',
    anaqueles: 5,
    status: false,
  },{
    index: 4,
    name: 'ALM-1',
    anaqueles: 2,
    status: true,
  }];

  constructor() { }

  ngOnInit(): void {
    this.listItems;
  }



}
