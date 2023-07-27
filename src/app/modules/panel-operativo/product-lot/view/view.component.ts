import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ProductLotRow } from '../models/product-lot-row';
import { TableHead } from '@shared/modules/tables/models/tableHead';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsLotResponse } from '@shared/services/products-lot/responses/productsLotResponse';
import { ProductsLotCrudService } from '@shared/services/products-lot/products-lot-crud.service';
import { parseISO, format } from 'date-fns';
import { utcToZonedTime,format as tzFormat } from 'date-fns-tz';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  rowsTable: ProductLotRow[] = [];
  columnsTable: TableHead<ProductLotRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '20px', align: 'center', custom: false },
    { header: 'Producto', field: 'product', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Codigo de lote', field: 'loteCode', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Fecha de caducidad', field: 'dateOfExpiry', width: '90px', maxWidth: '140px', align: 'center'},
    { header: 'Ver materia prima utilizada', field: 'view', width: '100px', align: 'center',custom: true },
    // { header: 'Editar', field: 'edit', width: '60px', maxWidth: '80px', align: 'center', custom: true, permit: 'write' },
    // { header: 'Estado', field: 'status', width: '60px', maxWidth: '80px', align: 'center', custom: true },
    // { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

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
  listOfProductsLotResponse: ProductsLotResponse[];
  resume: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsLotCrudService: ProductsLotCrudService
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
    this.productsLotCrudService.getAll().subscribe(
      (response) => {
        this.listOfProductsLotResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {
            return {
              index: index + 1,
              id: row.id,
              status: row.status,
              product:row.product,
              dateOfExpiry:row.dateOfExpiry  ? this.formatDate(row.dateOfExpiry): '',
              loteCode:row.loteCode
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
  formatDate(isoDateString: string): string {
    const date = parseISO(isoDateString);

    // Convierte la fecha a UTC
    const dateInUTC = utcToZonedTime(date, 'UTC');

    // Formatea la fecha en el formato deseado sin la zona horaria
    const formattedDate = tzFormat(dateInUTC, "yyyy-MM-dd ", { timeZone: 'UTC' });

    return formattedDate;

  }
  selectedEditConfirm(item: ProductLotRow): void {
    this.router.navigate(['./edit', item?.id], { relativeTo: this.route });
  }

  deleteItem(item) {
    this.productsLotCrudService.delete(item.id).subscribe(
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

  selectedStatusConfirm(item: ProductLotRow): void {
    // position in rowTable
    const index = this.rowsTable.findIndex((row) => row.id === item.id);
    // position in response
    const position = item.index - 1;
    this.rowsTable[index].status = !this.rowsTable[index].status;
    this.listOfProductsLotResponse[position].status = !this.listOfProductsLotResponse[position].status;
    this.productsLotCrudService.updateStatus({ status: this.listOfProductsLotResponse[position].status }, item.id).subscribe(
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
