import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownModel } from 'src/app/modules/panel-almacen/inventory/models/dropdown.Model';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { PartidasRow } from '../../models/partidas-row';
import { ActivatedRoute, Router } from '@angular/router';
import { RawMaterialsCrudService } from '@shared/services/raw-materials/raw-materials-crud.service';
import { PartidasResponse } from '@shared/services/receptions/partidas/responses/partidasResponse';
import { PartidasCrudService } from '@shared/services/receptions/partidas/partidas-crud.service';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { Partidas, ReceptionsFormModel } from '../../models/receptionsFormModel';
import { CreatePartidasDto } from '@shared/services/receptions/partidas/requests/createPartidasDto';
import { PartidasTransformService } from '../../services/partidas-transform.service';
import { ChangeDetectorRef } from '@angular/core';
import { Utils } from '@shared/services/common/utils';
import { PartidasFormModel } from '../../models/partidasFormModel';
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
  isDisabled: boolean = false;
  globalindex: any = null;
  id: string;
  buttonLabel: string = 'Agregar'
  selectedId: string;
  isEditConfirmSelected: boolean = false;
  buttonColor:string='#22c55e'
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  @ViewChild('submitError') submitError: DialogErrorComponent;
  @ViewChild('dialogLoading') dialogLoading: LoadingComponent;
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
    private rawMaterialsCrudService: RawMaterialsCrudService,
    // private translate: TranslateService,
    private partidasTransformService: PartidasTransformService,
    private cd:ChangeDetectorRef,
    private fb:FormBuilder
  ) {
    this.getMateriaPrima();
    // this.declareForm();
  }
  // declareForm(): void {
  //   this.formData = this.fb.group({
  //     rawMaterial: [, [Validators.required]],
  //     amount: [, [Validators.required]],
  //   })
  // }
  ngAfterViewInit(): void {
    this.getItemsOfTable();

    // this.listItems;
  }

  ngOnInit(): void {

  }

  // selectedEditConfirm(item: PartidasRow): void {
  //   this.router.navigate(['./edit/id', item?.id], { relativeTo: this.route });
  //   this.isEditButtonClicked = true;
  // }

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
              value: row.id
            }
          }
        )
        this.cd.detectChanges();
      },(error:any) => {
        console.log(error);
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
              rawMaterial:row.rawMaterial.name,
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

  assignPartida(){
    if(this.formData.valid){
      this.formData.markAllAsTouched();
      return;
    }
    this.loadingComponent.setDisplay(true);

    const request=this.partidasTransformService.toCreatePartidasDto(this.formData.value);

    this.partidasCrudService.create(request).subscribe((response: any) => {
      setTimeout(() => {
        this.loadingComponent.setDisplay(false);
        this.dialogSuccess.setDisplay(true);
      },1000);
    },(error:any)=>{
      this.loadingComponent.setDisplay(false);
      // this.submitError.setDisplay(true,error);
    })
  }

  editPartida(): void {
    console.log(this.formData.value);

    // if (this.formData.invalid) {
    //   this.formData.markAllAsTouched();
    //   return;
    // }
    this.dialogLoading.setDisplay(true);
    // const form: ShiftsFormModel = this.formData.getRawValue();
    const request=this.partidasTransformService.toUpdatePartidasDto(this.formData.value);

    const form = this.formData.getRawValue();
    // const request =this.shiftsTransformService.updateShiftsDto(form)
    const partialRequest = Utils.updatePartial(request);

    this.partidasCrudService.update(partialRequest,this.selectedId).subscribe(
      (response) => {
        this.dialogLoading.setDisplay(false);
        this.dialogSuccess.setDisplay(true, response);
      }, (error) => {
        this.dialogLoading.setDisplay(false);
        this.dialogError.setDisplay(true, error);
      }
    );
  }

  selectedEditConfirm(item) {

    console.log('hola'+item);
    let index = item.index;
    let value: PartidasRow = item.item;
    this.globalindex = index;
    let partidas: Partidas;

    this.listOfPartidasResponse.forEach((element) => {
      if (element.id.toUpperCase() === value.id.toUpperCase()) {
        partidas = element;
      }
    });

    // Obtener el ID del elemento seleccionado
    const selectedId = item.id; // Asumiendo que item tiene la propiedad 'id'
    this.selectedId = selectedId;
    console.log(selectedId);
    setTimeout(() => {
      this.formData.patchValue({
        amount: value.amount,
        rawMaterial: value.rawMaterial,
        index: index
      });
      this.getMateriaPrima();
      this.buttonLabel = 'Actualizar';
      this.buttonColor = '#2867ec';
      this.isEditConfirmSelected = true;
    });
  }


}


