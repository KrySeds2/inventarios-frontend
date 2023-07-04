import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropDownModel } from 'src/app/modules/panel-almacen/inventory/models/dropdown.Model';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { PartidasRow } from '../../models/partidas-row';
import { ActivatedRoute, Router } from '@angular/router';
import { RawMaterialsCrudService } from '@shared/services/raw-materials/raw-materials-crud.service';
import { PartidasResponse } from '@shared/services/receptions/partidas/responses/partidasResponse';
import { PartidasCrudService } from '@shared/services/receptions/partidas/partidas-crud.service';

@Component({
  selector: 'app-partidas-form',
  templateUrl: './partidas-form.component.html',
  styleUrls: ['./partidas-form.component.scss']
})
export class PartidasFormComponent implements OnInit {
  @Input() formData: FormGroup;
  listOfPartidasResponse: PartidasResponse[];
  listMateriaPrima:DropDownModel[] = [];
  isEditButtonClicked: boolean = false;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  rowsTable: PartidasRow[] = [];
  columnsTable: TableHead<PartidasRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Materia prima', field: 'rawMaterial', width: '100px', align: 'center' },
    { header: 'Cantidad', field: 'amount', width: '50px', maxWidth: '50px', align: 'center'},
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '50px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '50px', align: 'center', custom: true },
  ];
  // listItems: PartidasRow[] = [{
  //   index: 1,
  //   id:'456789',
  //   materia_prima:'',
  //   cantidad:'10',
  // },{
  //   index: 2,
  //   id:'12345',
  //   materia_prima:'MTP-02',
  //   cantidad:'5',
  // },{
  //   index: 3,
  //   id:'09876',
  //   materia_prima:'MTP-03',
  //   cantidad:'2',
  // },{
  //   index: 4,
  //   id:'23459',
  //   materia_prima:'MTP-04',
  //   cantidad:'1',
  // }];
  constructor(
    public validateErrors:ValidateFieldService,
    private router: Router,
    private route: ActivatedRoute,
    private partidasCrudService: PartidasCrudService,
    private rawMaterialsCrudService: RawMaterialsCrudService
    // private translate: TranslateService,
    // private partidasCrudService: PartidasCrudService
  ) {
    this.getMateriaPrima();
  }

  ngAfterViewInit(): void {
    this.getItemsOfTable();
    // this.listItems;
  }

  ngOnInit(): void {

  }

  selectedEditConfirm(item: PartidasRow): void {
    this.router.navigate(['./edit/id', item?.id], { relativeTo: this.route });
    this.isEditButtonClicked = true;
  }

  deleteItem(item) {
    this.partidasCrudService.delete(item.id).subscribe(
      (response: any[]) => {
        this.getItemsOfTable();
      }, (error: any) => {
        this.dialogError.setDisplay(true, error);

      }
    )
  }

  getMateriaPrima():void{
    this.rawMaterialsCrudService.getAll().subscribe(
      (response:any) => {
        this.listMateriaPrima = response.map(
          (row)=>{
            return{
              label: row.name,
              value: row.name
            }
          }
        )
      },(error:any) => {
        // console.log(error);
      }
    )
  }


  getItemsOfTable():void{
    this.partidasCrudService.getAll().subscribe(
      (response) => {
        this.listOfPartidasResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {
            return {
              index: index + 1,
              id: row.id,
              rawMaterial:row.rawMaterial,
              amount:row.amount
            };
          }
          );
          // this.setResume();
          this.loadingComponent.setDisplay(false);
        }, error => {
          this.loadingComponent.setDisplay(false);
        }
      );
  }


}


