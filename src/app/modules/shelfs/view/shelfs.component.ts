import { Component, OnInit } from '@angular/core';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { ShelfsRow } from '../models/shelfs-row';

@Component({
  selector: 'app-shelfs',
  templateUrl: './shelfs.component.html',
  styleUrls: ['./shelfs.component.scss']
})
export class ShelfsComponent implements OnInit {

  columnsTable: TableHead<ShelfsRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Nombre', field: 'name', width: '100px', align: 'center' },
    { header: 'Estado', field: 'status', width: '50px', maxWidth: '50px', align: 'center', custom: true },
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '50px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '50px', align: 'center', custom: true },

  ];
  listItems: ShelfsRow[] = [{
    index: 1,
    name: 'ANQL-1',
    status: true,
  },{
    index: 2,
    name: 'ANQL-2',
    status: true,
  },{
    index: 3,
    name: 'ANQL-3',
    status: false,
  },{
    index: 4,
    name: 'ANQL-4',
    status: true,
  }];

  constructor() { }

  ngOnInit(): void {
    this.listItems;
  }

}
