import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { OrdersRow } from '../models/orders-row';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { OrdersResponse } from 'src/app/shared/services/orders/responses/ordersResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OrdersCrudService } from 'src/app/shared/services/orders/orders-crud.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  rowsTable: OrdersRow[] = [];
  columnsTable: TableHead<OrdersRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Folio', field: 'folio', width: '100px', align: 'center' },
    { header: 'Producto', field: 'producto', width: '100px', align: 'center' },
    { header: 'Cantidad', field: 'cantidad', width: '100px', align: 'center' },
    { header: 'Estado', field: 'status', width: '50px', maxWidth: '90px', align: 'center', custom: true },
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '90px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  listItems: OrdersRow[] = [{
    index: 1,
    id:'1214',
    folio: 96531,
    producto: 'PR-01',
    cantidad:10,
    status: true,
  },{
    index: 2,
    id:'5678',
    folio: 63244,
    producto: 'PR-02',
    cantidad:5,
    status: true,
  },{
    index: 3,
    id:'4567',
    folio: 85632,
    producto: 'PR-03',
    cantidad:2,
    status: false,
  },{
    index: 4,
    id:'0987',
    folio: 56325,
    producto: 'PR-04',
    cantidad:3,
    status: true,
  }];
  listOfOrdersResponse: OrdersResponse[];
  resume: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private ordersCrudService: OrdersCrudService
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
    this.ordersCrudService.getAll().subscribe(
      (response) => {
        this.listOfOrdersResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {
            return {
              index: index + 1,
              id: row.id,
              status: row.status,
              folio:row.folio,
              cantidad: row.cantidad,
              producto: row.producto
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


  selectedEditConfirm(item: OrdersRow): void {
    this.router.navigate(['./edit', item?.id], { relativeTo: this.route });
  }

  deleteItem(item) {
    this.ordersCrudService.delete(item.id).subscribe(
      (response: any[]) => {
        this.getItemsOfTable();
      }, (error: any) => {
        this.dialogError.setDisplay(true, error);

      }
    )
  }


  selectedStatusConfirm(item: OrdersRow): void {
    // position in rowTable
    const index = this.rowsTable.findIndex((row) => row.id === item.id);
    // position in response
    const position = item.index - 1;
    this.rowsTable[index].status = !this.rowsTable[index].status;
    this.listOfOrdersResponse[position].status = !this.listOfOrdersResponse[position].status;
    this.ordersCrudService.update({ status: this.listOfOrdersResponse[position].status }, item.id).subscribe(
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
