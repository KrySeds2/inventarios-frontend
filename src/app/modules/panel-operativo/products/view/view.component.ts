import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ProductsRow } from '../models/products-row';
import { TableHead } from '@shared/modules/tables/models/tableHead';
import { ProductsCrudService } from '@shared/services/products/products-crud.service';
import { ProductsResponse } from '@shared/services/products/responses/productsResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  rowsTable: ProductsRow[] = [];

  columnsTable: TableHead<ProductsRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Nombre', field: 'name', width: '100px', align: 'center' },
    { header: 'Estado del pedido', field: 'orderStatus', width: '100px', align: 'center' },
    { header: 'Estado', field: 'status', width: '50px', maxWidth: '90px', align: 'center', custom: true },
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '90px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  // listItems: ProductsRow[] = [{
  //   index: 1,
  //   id:'1214',
  //   name: 'PR-01',
  //   statusOrders: 'Por hacer',
  //   status: true,
  // },{
  //   index: 2,
  //   id:'3456',
  //   name: 'PR-02',
  //   statusOrders: 'En proceso',
  //   status: true,
  // },{
  //   index: 3,
  //   id:'0987',
  //   name: 'PR-03',
  //   statusOrders: 'En proceso',
  //   status: true,
  // },{
  //   index: 4,
  //   id:'5832',
  //   name: 'PR-04',
  //   statusOrders: 'Finalizado',
  //   status: true,
  // }];
  listOfProductsResponse: ProductsResponse[];
  resume: any[];
  constructor(
    private productCrudService: ProductsCrudService,
    private router: Router,
    private route: ActivatedRoute,
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

  getItemsOfTable():void{
    this.productCrudService.getAll().subscribe(
      (response) => {
        this.listOfProductsResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {
            return {
              index: index + 1,
              id: row.id,
              status: row.status,
              name:row.name,
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

  selectedEditConfirm(item: ProductsRow): void {
    this.router.navigate(['./edit', item?.id], { relativeTo: this.route });
  }

  deleteItem(item) {
    this.productCrudService.delete(item.id).subscribe(
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

  selectedStatusConfirm(item: ProductsRow): void {
    // position in rowTable
    const index = this.rowsTable.findIndex((row) => row.id === item.id);
    // position in response
    const position = item.index - 1;
    this.rowsTable[index].status = !this.rowsTable[index].status;
    this.listOfProductsResponse[position].status = !this.listOfProductsResponse[position].status;
    this.productCrudService.update({ status: this.listOfProductsResponse[position].status }, item.id).subscribe(
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
