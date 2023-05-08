import { Component, OnInit } from '@angular/core';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { ReceptionsRow } from '../models/receptions-row';

@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.component.html',
  styleUrls: ['./receptions.component.scss']
})
export class ReceptionsComponent implements OnInit {
  columnsTable: TableHead<ReceptionsRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '20px', align: 'center', custom: false },
    { header: 'Folio', field: 'folio', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Fecha de llegada', field: 'fechaLlegada', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Estado del pedido', field: 'estadoPedido', width: '90px', maxWidth: '140px', align: 'center' },
    { header: 'Editar', field: 'edit', width: '60px', maxWidth: '80px', align: 'center', custom: true, permit: 'write' },
    { header: 'Estado', field: 'status', width: '60px', maxWidth: '80px', align: 'center', custom: true },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  listItems: ReceptionsRow[] = [{
    index: 1,
    folio: '05324',
    fechaLlegada: '21-03-2023',
    estadoPedido: 'En proceso',
    status: true,

  },
  {
    index: 2,
    folio: '54659',
    fechaLlegada: '21-03-2023',
    estadoPedido: 'En proceso',
    status: false,

  },{
    index: 3,
    folio: '98231',
    fechaLlegada: '21-03-2023',
    estadoPedido: 'Finalizado',
    status: true,

  },{
    index: 4,
    folio: '58484',
    fechaLlegada: '21-03-2023',
    estadoPedido: 'Por hacer',
    status: false,

  }];
  constructor() { }

  ngOnInit(): void {
    // Recuperar los datos guardados del almacenamiento local y actualizar los productos correspondientes
    // let dataGuardada = localStorage.getItem('data');
    // if (dataGuardada !== null) {
    //   this.data = JSON.parse(dataGuardada);
    // }
  }

  // handleChange(row: any) {
  //   row.estado = !row.estado;
  //   this.guardarEstadoSwitchs();
  //   console.log(row);
  // }

  // guardarEstadoSwitchs() {
  //   localStorage.setItem('data', JSON.stringify(this.data));
  // }

}
