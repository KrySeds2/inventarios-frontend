import { Component, OnInit, ViewChild } from '@angular/core';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { ReceptionsRow } from '../models/receptions-row';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ReceptionsCrudService } from 'src/app/shared/services/receptions/receptions-crud.service';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { ReceptionsResponse } from 'src/app/shared/services/receptions/responses/receptionsResponse';

@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.component.html',
  styleUrls: ['./receptions.component.scss']
})
export class ReceptionsComponent implements OnInit {
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  rowsTable: ReceptionsRow[] = [];
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
    id:'34567',
    folio: '05324',
    fechaLlegada: '21-03-2023',
    estadoPedido: 'En proceso',
    status: true,

  },
  {
    index: 2,
    id:'12345',
    folio: '54659',
    fechaLlegada: '21-03-2023',
    estadoPedido: 'En proceso',
    status: false,

  },{
    index: 3,
    id:'67890',
    folio: '98231',
    fechaLlegada: '21-03-2023',
    estadoPedido: 'Finalizado',
    status: true,

  },{
    index: 4,
    id:'098543',
    folio: '58484',
    fechaLlegada: '21-03-2023',
    estadoPedido: 'Por hacer',
    status: false,

  }];
  listOfReceptionsResponse: ReceptionsResponse[];
  resume: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private receptionsCrudService: ReceptionsCrudService
  ) { }

  ngAfterViewInit(): void {
    this.setResume();
    this.loadingComponent.setDisplay(true);
    this.getItemsOfTable();
    this.listItems;
  }

  ngOnInit(): void {
    this.setResume();
  }

  getItemsOfTable():void{
    this.receptionsCrudService.getAll().subscribe(
      (response) => {
        this.listOfReceptionsResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {
            return {
              index: index + 1,
              id: row.id,
              status: row.status,
              folio:row.folio,
              fechaLlegada:row.date_llegada,
              estadoPedido:row.estado_pedido
            };
          }
          );
          this.setResume();
          this.loadingComponent.setDisplay(false);
        }, error => {
          this.loadingComponent.setDisplay(false);
        }
      );
  }

  selectedEditConfirm(item: ReceptionsRow): void {
    this.router.navigate(['./edit', item?.id], { relativeTo: this.route });
  }

  deleteItem(item) {
    this.receptionsCrudService.delete(item.id).subscribe(
      (response: any[]) => {
        this.getItemsOfTable();
      }, (error: any) => {
        this.dialogError.setDisplay(true, error);

      }
    )
  }

  // handleChange(row: any) {
  //   row.estado = !row.estado;
  //   this.guardarEstadoSwitchs();
  //   console.log(row);
  // }

  // guardarEstadoSwitchs() {
  //   localStorage.setItem('data', JSON.stringify(this.data));
  // }

  selectedStatusConfirm(item: ReceptionsRow): void {
    // position in rowTable
    const index = this.rowsTable.findIndex((row) => row.id === item.id);
    // position in response
    const position = item.index - 1;
    this.rowsTable[index].status = !this.rowsTable[index].status;
    this.listOfReceptionsResponse[position].status = !this.listOfReceptionsResponse[position].status;
    this.receptionsCrudService.update({ status: this.listOfReceptionsResponse[position].status }, item.id).subscribe(
      (response: any) => {
        this.setResume();
      }
    );
  }

  //resumen
  setResume(): void {
    this.rowsTable = (this.rowsTable?.length) ? this.rowsTable : [];
    const total = (this.rowsTable?.length) ? this.rowsTable?.length : 0 ;
    let enabled = 0;
    let disable = 0;

    for (const item of this.rowsTable) {
      if (item.status) {
        enabled++;
      } else {
        disable++;
      }

    }
    this.resume = [
      {
        label: 'Total de registros',
        value: total.toString(),
        color: '--CP003',
      },
      {
        label: 'Habilitados',
        value: enabled.toString(),
        color: '--CB001',
      },
      {
        label: 'Deshabilitados',
        value: disable.toString(),
        color: '--CS003',
      },
    ];
  }

}
