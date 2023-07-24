import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryRow } from '../models/inventory-row';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { InventoryCrudService } from 'src/app/shared/services/inventory/inventory-crud.service';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { InventoryResponse } from 'src/app/shared/services/inventory/responses/inventoryResponse';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') loadingComponent:LoadingComponent;
  rowsTable: InventoryRow[] = [];
  columnsTable: TableHead<InventoryRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '20px', align: 'center', custom: false },
    { header: 'Almacen', field: 'wareh', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Anaquel', field: 'shelf', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Materia Prima', field: 'rawMaterial_', width: '90px', maxWidth: '140px', align: 'center' },
    { header: 'Cantidad', field: 'amount', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Id unico de paquete', field: 'idpackage', width: '90px', maxWidth: '120px', align: 'center' },
    { header: 'Editar', field: 'edit', width: '60px', maxWidth: '80px', align: 'center', custom: true, permit: 'write' },
    { header: 'Fecha de caducidad', field: 'dateOfExpiry', width: '90px', maxWidth: '110px', align: 'center' },
    { header: 'Estado', field: 'status', width: '60px', maxWidth: '80px', align: 'center', custom: true, permit:'write', order:false },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  listOfInventoryResponse: InventoryResponse[];
  resume: any[];
  // listItems: InventoryRow[] = [{
  //   index: 1,
  //   id:'23456',
  //   almacen: 'ALM-01',
  //   anaquel: 'ANQL-01',
  //   idUnicoMateriaPrima: 'MTP-01',
  //   cantidad: 2,
  //   idUnicoPaquete: '45896-0324-5632',
  //   fechaCaducidad: '12-03-2023',
  //   status: true
  // },
  // {
  //   index: 2,
  //   id:'098765',
  //   almacen: 'ALM-02',
  //   anaquel: 'ANQL-02',
  //   idUnicoMateriaPrima: 'MTP-02',
  //   cantidad: 10,
  //   idUnicoPaquete: '9653-55454-4512',
  //   fechaCaducidad: '15-03-2023',
  //   status:true
  // },{
  //   index: 3,
  //   id:'123678',
  //   almacen: 'ALM-05',
  //   anaquel: 'ANQL-01',
  //   idUnicoMateriaPrima: 'MTP-02',
  //   cantidad: 100,
  //   idUnicoPaquete: '6524-5632-56544',
  //   fechaCaducidad: '25-03-2023',
  //   status:false
  // },{
  //   index: 4,
  //   id:'983456',
  //   almacen: 'ALM-03',
  //   anaquel: 'ANQL-03',
  //   idUnicoMateriaPrima: 'MTP-04',
  //   cantidad: 50,
  //   idUnicoPaquete: '63963-14523-4563',
  //   fechaCaducidad: '02-04-2023',
  //   status:true
  // }];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private inventoryCrudService: InventoryCrudService
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

  getItemsOfTable(): void {
    this.inventoryCrudService.getAll().subscribe(
      (response) => {
        this.listOfInventoryResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {
            console.log(row?.shelf?.name);
            console.log(row?.rawMaterial_?.name);
            console.log(row?.wareh?.name);
            console.log(row?.amount);
            return {
              index: index + 1,
              id: row.id,
              status: row.status,
              shelf: row?.shelf.name,
              rawMaterial_: row?.rawMaterial_.name,
              idpackage: row.idpackage,
              amount: row.amount,
              dateOfExpiry: row.dateOfExpiry,
              wareh: row?.wareh.name
            };
          }
        );
        this.setResume();
        this.loadingComponent.setDisplay(false);
      },
      error => {
        this.loadingComponent.setDisplay(false);
      }
    );
  }

  selectedEditConfirm(item: InventoryRow): void {
    this.router.navigate(['./edit', item?.id], { relativeTo: this.route });
  }
  deleteItem(item) {
    this.inventoryCrudService.delete(item.id).subscribe(
      (response: any[]) => {
        this.getItemsOfTable();
      }, (error: any) => {
        this.dialogError.setDisplay(true, error);

      }
    )
  }

  selectedStatusConfirm(item: InventoryRow): void {
    // position in rowTable
    const index = this.rowsTable.findIndex((row) => row.id === item.id);
    // position in response
    const position = item.index - 1;
    this.rowsTable[index].status = !this.rowsTable[index].status;
    this.listOfInventoryResponse[position].status = !this.listOfInventoryResponse[position].status;
    this.inventoryCrudService.updateStatus({ status: this.listOfInventoryResponse[position].status }, item.id).subscribe(
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
