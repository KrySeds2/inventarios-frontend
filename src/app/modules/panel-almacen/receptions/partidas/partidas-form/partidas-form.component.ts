import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropDownModel } from 'src/app/modules/panel-almacen/inventory/models/dropdown.Model';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { PartidasRow } from '../../models/partidas-row';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-partidas-form',
  templateUrl: './partidas-form.component.html',
  styleUrls: ['./partidas-form.component.scss']
})
export class PartidasFormComponent implements OnInit {
  @Input() formData: FormGroup;
  listMateriaPrima:DropDownModel[] = [];
  isEditButtonClicked: boolean = false;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  rowsTable: PartidasRow[] = [];
  columnsTable: TableHead<PartidasRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Materia prima', field: 'materia_prima', width: '100px', align: 'center' },
    { header: 'Cantidad', field: 'cantidad', width: '50px', maxWidth: '50px', align: 'center'},
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '50px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '50px', align: 'center', custom: true },
  ];
  listItems: PartidasRow[] = [{
    index: 1,
    id:'456789',
    materia_prima:'',
    cantidad:'10',
  },{
    index: 2,
    id:'12345',
    materia_prima:'MTP-02',
    cantidad:'5',
  },{
    index: 3,
    id:'09876',
    materia_prima:'MTP-03',
    cantidad:'2',
  },{
    index: 4,
    id:'23459',
    materia_prima:'MTP-04',
    cantidad:'1',
  }];
  constructor(
    public validateErrors:ValidateFieldService,
    private router: Router,
    private route: ActivatedRoute,
    // private translate: TranslateService,
    // private partidasCrudService: PartidasCrudService
  ) { }

  ngOnInit(): void {
    this.listItems;
  }

  selectedEditConfirm(item: PartidasRow): void {
    this.router.navigate(['./edit/id', item?.id], { relativeTo: this.route });
    this.isEditButtonClicked = true;
  }

  deleteItem(item) {
    // this.receptionsCrudService.delete(item.id).subscribe(
    //   (response: any[]) => {
    //     this.getItemsOfTable();
    //   }, (error: any) => {
    //     this.dialogError.setDisplay(true, error);

    //   }
    // )
  }

  getMateriaPrima():void{
    this.listMateriaPrima.map(
      (row) => {
        return{
          label: row.label,
          value: row.value
        }
      }
    )
  }
}
