import { Component, OnInit, ViewChild } from '@angular/core';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { RawMaterialsRow } from '../models/raw-materials-row';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RawMaterialsCrudService } from 'src/app/shared/services/raw-materials/raw-materials-crud.service';
import { RawMaterialsResponse } from 'src/app/shared/services/raw-materials/responses/rawMaterialsResponse';
import { MateriasPrimasService } from 'src/app/shared/services/materias-primas/materias-primas.service';

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  rowsTable: RawMaterialsRow[] = [];
  columnsTable: TableHead<RawMaterialsRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Nombre', field: 'name', width: '100px', align: 'center' },
    { header: 'ID unico para escanear', field: 'scaneId', width: '100px', align: 'center' },
    { header: 'Estado', field: 'status', width: '50px', maxWidth: '90px', align: 'center', custom: true },
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '90px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  // listItems: RawMaterialsRow[] = [{
  //   index: 1,
  //   id:'12121',
  //   name: 'MTP-01',
  //   scaneId: '45896-0324-5632',
  //   status: true,
  // }, {
  //   index: 2,
  //   id:'2365',
  //   name: 'MTP-02',
  //   scaneId: '9653-55454-4512',
  //   status: true,
  // }, {
  //   index: 3,
  //   id:'5678',
  //   name: 'MTP-03',
  //   scaneId: '6524-5631-56544',
  //   status: false,
  // }, {
  //   index: 4,
  //   id:'98765',
  //   name: 'MTP-04',
  //   scaneId: '63963-14523-4563',
  //   status: true,
  // }];
  listOfRawMaterialsResponse: RawMaterialsResponse[];
  resume: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private rawMaterialsCrudService: RawMaterialsCrudService,
    private materiasCrudService: MateriasPrimasService
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
    this.rawMaterialsCrudService.getAll().subscribe(
      (response) => {
        this.listOfRawMaterialsResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {
            return {
              index: index + 1,
              id: row.id,
              status: row.status,
              name: row.name,
              description:row.description,
              scaneId: row.scaneId,
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

  selectedEditConfirm(item: RawMaterialsRow): void {
    this.router.navigate(['./edit', item?.id], { relativeTo: this.route });
  }

  deleteItem(item) {
    this.rawMaterialsCrudService.delete(item.id).subscribe(
      (response: any[]) => {
        this.getItemsOfTable();
      }, (error: any) => {
        this.dialogError.setDisplay(true, error);

      }
    )
  }

  selectedStatusConfirm(item: RawMaterialsRow): void {
    // position in rowTable
    const index = this.rowsTable.findIndex((row) => row.id === item.id);
    // position in response
    const position = item.index - 1;
    this.rowsTable[index].status = !this.rowsTable[index].status;
    this.listOfRawMaterialsResponse[position].status = !this.listOfRawMaterialsResponse[position].status;
    this.rawMaterialsCrudService.update({ status: this.listOfRawMaterialsResponse[position].status }, item.id).subscribe(
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
