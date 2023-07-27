import { Component, OnInit, ViewChild } from '@angular/core';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { ReceptionsRow } from '../models/receptions-row';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ReceptionsCrudService } from 'src/app/shared/services/receptions/receptions-crud.service';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ReceptionsResponse } from 'src/app/shared/services/receptions/responses/receptionsResponse';
import { parseISO, format } from 'date-fns';
import { utcToZonedTime,format as tzFormat } from 'date-fns-tz';
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
    { header: 'Fecha de llegada', field: 'arrivalDate', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Estado del pedido', field: 'orderStatus', width: '90px', maxWidth: '140px', align: 'center'},
    { header: 'Editar', field: 'edit', width: '60px', maxWidth: '80px', align: 'center', custom: true, permit: 'write' },
    { header: 'Estado', field: 'status', width: '60px', maxWidth: '80px', align: 'center', custom: true },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  // listItems: ReceptionsRow[] = [{
  //   index: 1,
  //   id:'34567',
  //   folio: '05324',
  //   fechaLlegada: '21-03-2023',
  //   estadoPedido: 'En proceso',
  //   status: true,

  // },
  // {
  //   index: 2,
  //   id:'12345',
  //   folio: '54659',
  //   fechaLlegada: '21-03-2023',
  //   estadoPedido: 'En proceso',
  //   status: false,

  // },{
  //   index: 3,
  //   id:'67890',
  //   folio: '98231',
  //   fechaLlegada: '21-03-2023',
  //   estadoPedido: 'Finalizado',
  //   status: true,

  // },{
  //   index: 4,
  //   id:'098543',
  //   folio: '58484',
  //   fechaLlegada: '21-03-2023',
  //   estadoPedido: 'Por hacer',
  //   status: false,

  // }];
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
    // this.listItems;
  }

  ngOnInit(): void {
    this.setResume();
  }

  getColorClass(orderStatus: string): string {
    switch (orderStatus) {
      case 'iniciado':
        return 'status-finalizado';
      case 'en proceso':
        return 'status-enproceso';
      case 'finalizado':
        return 'status-terminado';
      default:
        return '';
    }
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
              arrivalDate:row.arrivalDate ? this.formatDate(row.arrivalDate): '',
              orderStatus:row.orderStatus
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

  formatDate(isoDateString: string): string {
    const date = parseISO(isoDateString);

    // Convierte la fecha a UTC
    const dateInUTC = utcToZonedTime(date, 'UTC');

    // Formatea la fecha en el formato deseado sin la zona horaria
    const formattedDate = tzFormat(dateInUTC, "yyyy-MM-dd HH:mm:ss", { timeZone: 'UTC' });

    return formattedDate;

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
    this.receptionsCrudService.updateStatus({ status: this.listOfReceptionsResponse[position].status }, item.id).subscribe(
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
