import { Component, OnInit } from '@angular/core';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { RawMaterialsRow } from '../models/raw-materials-row';

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {
  columnsTable: TableHead<RawMaterialsRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Nombre', field: 'name', width: '100px', align: 'center' },
    { header: 'ID unico para escanear', field: 'idUnicoEscanear', width: '100px', align: 'center' },
    { header: 'Estado', field: 'status', width: '50px', maxWidth: '90px', align: 'center', custom: true },
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '90px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  listItems: RawMaterialsRow[] = [{
    index: 1,
    name: 'MTP-01',
    idUnicoEscanear: '45896-0324-5632',
    status: true,
  }, {
    index: 2,
    name: 'MTP-02',
    idUnicoEscanear: '9653-55454-4512',
    status: true,
  }, {
    index: 3,
    name: 'MTP-03',
    idUnicoEscanear: '6524-5631-56544',
    status: false,
  }, {
    index: 4,
    name: 'MTP-04',
    idUnicoEscanear: '63963-14523-4563',
    status: true,
  }];

  constructor() { }

  ngOnInit(): void {
    this.listItems;
  }

}
