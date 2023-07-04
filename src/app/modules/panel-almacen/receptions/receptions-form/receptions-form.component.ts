import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TableHead } from '@shared/modules/tables/models/tableHead';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { PartidasRow } from '../models/partidas-row';
import { DropDownModel } from '../../inventory/models/dropdown.Model';
import { ReceptionsTransformService } from '../services/receptions-transform.service';
import { PartidasModel, ReceptionsFormModel } from '../models/receptionsFormModel';

@Component({
  selector: 'app-receptions-form',
  templateUrl: './receptions-form.component.html',
  styleUrls: ['./receptions-form.component.scss']
})
export class ReceptionsFormComponent implements OnInit {
  @Input() formData: FormGroup;
  // formSubPartidas: FormGroup;
  // rowsTable: PartidasRow[] = [];
  // listRawMaterial:DropDownModel[]=[]
  // columnsTable: TableHead<PartidasRow>[] = [
  //   { header: 'N°', field: 'index', width: '20px', maxWidth: '20px', align: 'center', custom: false },
  //   { header: 'Cantidad', field: 'amount', width: '90px', maxWidth: '100px', align: 'center' },
  //   { header: 'Materia Prima', field: 'rawMaterial', width: '90px', maxWidth: '100px', align: 'center' },
  //   { header: 'Editar', field: 'edit', width: '60px', maxWidth: '80px', align: 'center', custom: true, permit: 'write' },
  //   { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  // ];
  constructor(
    public validateErrors: ValidateFieldService,
    private receptionsTransformService: ReceptionsTransformService
  ) {
    // this.formSubPartidas = receptionsTransformService.toFormPartidas();
  }

  ngOnInit(): void {
  }

  // get SubPartidasForm(): FormArray {
  //   return this.formData.get('partidas') as FormArray;
  // }
  // deleteItemTable(item:PartidasRow):void {
  //   this.SubPartidasForm.removeAt(item.index -1)
  //  }

  //  addTableItems(): void {
  //   if (this.formSubPartidas.invalid) {
  //     this.formSubPartidas.markAllAsTouched();
  //     return;
  //   }
  //   const formValue: ReceptionsFormModel = this.formSubPartidas.getRawValue();
  //   const newForm = this.receptionsTransformService.toFormPartidas();
  //   newForm.patchValue(formValue);
  //   this.SubPartidasForm.push(newForm);
  //   this.formSubPartidas.reset();
  //   this.getListTable();
  //   console.log(this.formData.value.subProducts);
  // }

  // getListTable(): void {
  //   const list: any[] = this.formData.value.registrarPartida;
  //   this.rowsTable = list.map(
  //     (row, index) => {
  //       return {
  //         rawMaterial: row.rawMaterial.name,
  //         id: row?.id,
  //         amount: row.amount,
  //         index: index + 1,
  //       };
  //     }
  //   );
  // }
}
