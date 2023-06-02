import { Component, OnInit, ViewChild } from '@angular/core';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { WarehousesRow } from '../models/warehouses-row';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { WarehousesCrudService } from 'src/app/shared/services/warehouses/warehouses-crud.service';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { WarehousesResponse } from 'src/app/shared/services/warehouses/responses/warehousesResponse';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  rowsTable: WarehousesRow[] = [];
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
    id:'1214',
    name: 'ALM-1',
    anaqueles: 3,
    status: true,
  },{
    index: 2,
    id:'156789',
    name: 'ALM-2',
    anaqueles: 4,
    status: true,
  },{
    index: 3,
    id:'45678',
    name: 'ALM-3',
    anaqueles: 5,
    status: false,
  },{
    index: 4,
    id:'89076',
    name: 'ALM-4',
    anaqueles: 2,
    status: true,
  }];
  listOfWarehousesResponse: WarehousesResponse[];
  resume: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private warehousesCrudService: WarehousesCrudService
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
    this.warehousesCrudService.getAll().subscribe(
      (response) => {
        this.listOfWarehousesResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {
            return {
              index: index + 1,
              id: row.id,
              status: row.status,
              name:row.name,
              anaqueles: row.anaqueles
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

  selectedEditConfirm(item: WarehousesRow): void {
    this.router.navigate(['./edit', item?.id], { relativeTo: this.route });
  }

  deleteItem(item) {
    this.warehousesCrudService.delete(item.id).subscribe(
      (response: any[]) => {
        this.getItemsOfTable();
      }, (error: any) => {
        this.dialogError.setDisplay(true, error);

      }
    )
  }

  selectedStatusConfirm(item: WarehousesRow): void {
    // position in rowTable
    const index = this.rowsTable.findIndex((row) => row.id === item.id);
    // position in response
    const position = item.index - 1;
    this.rowsTable[index].status = !this.rowsTable[index].status;
    this.listOfWarehousesResponse[position].status = !this.listOfWarehousesResponse[position].status;
    this.warehousesCrudService.update({ status: this.listOfWarehousesResponse[position].status }, item.id).subscribe(
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
