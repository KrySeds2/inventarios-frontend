import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from '@shared/modules/dialogs/dialog-error/dialog-error.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { DropDownModel } from 'src/app/modules/panel-almacen/inventory/models/dropdown.Model';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { RecipesRow } from '../../models/recipes-row';
import { TableHead } from '@shared/modules/tables/models/tableHead';

import { RecipesCrudService } from '@shared/services/products/recipes/recipes-crud.service';
import { RecipesModel } from '../../models/productLotFormModel';
import { RawMaterialsCrudService } from '@shared/services/raw-materials/raw-materials-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesResponse } from '@shared/services/products/recipes/responses/recipesResponse';
import { RecipesTransformService } from '../../services/recipes-transform.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  @Input() formData: FormGroup;
  listMateriaPrima:DropDownModel[] = [];
  listOfRecipesResponse:RecipesResponse[];
  isEditButtonClicked: boolean = false;
  isDisabled: boolean = false;
  globalindex: any = null;
  buttonLabel: string = 'Agregar'
  buttonColor:string='#22c55e'
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  @ViewChild('submitError') submitError: DialogErrorComponent;
  rowsTable: RecipesRow[] = [];
  columnsTable: TableHead<RecipesRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Materia prima', field: 'material', width: '100px', align: 'center' },
    { header: 'Cantidad/usar', field: 'amount_to_use', width: '50px', maxWidth: '50px', align: 'center'},
    { header: 'Codigo de paquete', field: 'amount_to_use', width: '50px', maxWidth: '50px', align: 'center'},
    { header: 'Fecha de caducidad', field: 'amount_to_use', width: '50px', maxWidth: '50px', align: 'center'},
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '50px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '50px', align: 'center', custom: true },
  ];
  constructor(
    public validateErrors: ValidateFieldService,
    private recipesTransformService: RecipesTransformService,
    private recipesCrudService: RecipesCrudService,
    private cd:ChangeDetectorRef,
    private rawMaterialsCrudService: RawMaterialsCrudService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.getMateriaPrima();
  }

  ngAfterViewInit(): void {
    this.getItemsOfTable();

    // this.listItems;
  }

  ngOnInit(): void {
  }

  deleteItem(item) {
    this.recipesCrudService.delete(item.id).subscribe(
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
    this.recipesCrudService.getAll().subscribe(
      (response) => {
        this.listOfRecipesResponse = response;
        console.log(response);
        this.rowsTable = response.map(
          (row, index) => {

            return {

              index: index + 1,
              id: row.id,
              material:row.material.name,
              amount_to_use:row.amount_to_use
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

    const request=this.recipesTransformService.toCreateRecipesDto(this.formData.value);

    this.recipesCrudService.create(request).subscribe((response: any) => {
      setTimeout(() => {
        this.loadingComponent.setDisplay(false);
        this.dialogSuccess.setDisplay(true);
      },1000);
    },(error:any)=>{
      this.loadingComponent.setDisplay(false);
      // this.submitError.setDisplay(true,error);
    })
  }

  selectedEditConfirm(item){
    console.log(item);
    let index = item.index;
    let value: RecipesRow = item.item
    this.globalindex = index;
    let partidas : RecipesModel

    this.listOfRecipesResponse.forEach(element => {
      if(element.id.toUpperCase() === value.id.toUpperCase()){
        partidas= element
      }
    });

    setTimeout(() => {
      this.formData.patchValue({
        amount:value.amount_to_use,
        rawMaterial:value.material,
        index:index
      })
      this.getMateriaPrima();
      this.buttonLabel = 'Actualizar';
      this.buttonColor = '#2867ec';
    })

  }

}
