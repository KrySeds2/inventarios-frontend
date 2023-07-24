import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { RawMaterialsUsedRow } from './models/raw-materials-used-row';
import { TableHead } from '@shared/modules/tables/models/tableHead';
import { RawMaterialsUsedResponse } from '@shared/services/raw-materials-used/responses/rawMaterialsUsedResponse';

@Component({
  selector: 'app-raw-materials-used',
  templateUrl: './raw-materials-used.component.html',
  styleUrls: ['./raw-materials-used.component.scss']
})
export class RawMaterialsUsedComponent implements OnInit {
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  @Input() formData: FormGroup;
  // @Input() align:string = 'right'
  rowsTable:RawMaterialsUsedRow;
  columnsTable:TableHead<RawMaterialsUsedRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '20px', align: 'center', custom: false },
    { header: 'Materia prima', field: 'rawM', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Cantidad/usar', field: 'amount', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Codigo de paquete', field: 'idpackage', width: '90px', maxWidth: '140px', align: 'center'},
    { header: 'Fecha de caducidad', field: 'dateOfExpire', width: '100px', align: 'center'},
    // { header: 'Editar', field: 'edit', width: '60px', maxWidth: '80px', align: 'center', custom: true, permit: 'write' },
    // { header: 'Estado', field: 'status', width: '60px', maxWidth: '80px', align: 'center', custom: true },
    // { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  listOfRawMaterialsUsedResponse: RawMaterialsUsedResponse[];
  RawMaterialsUsedCrudService: any;
  constructor(
    public validateErrors: ValidateFieldService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.declareForm();
  }
  declareForm():void{
    this.formData = this.fb.group({
      loteCode:[,[Validators.required]],
      // rawMaterial:[,[Validators.required]],
      // amount:[,[Validators.required]],
    })
  }
  ngAfterViewInit(): void {

    this.loadingComponent.setDisplay(true);
    this.getItemsOfTable();
    // this.listItems;
  }

  ngOnInit(): void {

  }
  getItemsOfTable():void{
    this.RawMaterialsUsedCrudService.getAll().subscribe(
      (response) => {
        this.listOfRawMaterialsUsedResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {
            return {
              index: index + 1,
              id: row.id,
              status: row.status,
              rawM:row.rawM,
              dateOfExpiry:row.dateOfExpiry,
              amount:row.amount,
              idpackage:row.idpackage,
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
