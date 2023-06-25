import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TableHead } from '@shared/modules/tables/models/tableHead';
import { ValidateFieldService } from 'src/app/services/validations/validate-field.service';
import { PartidasRow } from '../models/partidas-row';

@Component({
  selector: 'app-receptions-form',
  templateUrl: './receptions-form.component.html',
  styleUrls: ['./receptions-form.component.scss']
})
export class ReceptionsFormComponent implements OnInit {
  @Input() formData: FormGroup;
  formSub: FormGroup;
  // rowsTable: PartidasRow[] = [];
  // columnsTable: TableHead<PartidasRow>[] = [
  //   { header: 'N°', field: 'index', width: '20px', maxWidth: '20px', align: 'center', custom: false },
  //   { header: 'Folio', field: 'name', width: '90px', maxWidth: '100px', align: 'center' },
  //   { header: 'Fecha de llegada', field: 'cantidad', width: '90px', maxWidth: '100px', align: 'center' },
  //   { header: 'Editar', field: 'edit', width: '60px', maxWidth: '80px', align: 'center', custom: true, permit: 'write' },
  //   { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  // ];
  constructor(
    public validateErrors: ValidateFieldService,
  ) { }

  ngOnInit(): void {
  }

  // get Partidas(): FormArray {
  //   return this.formData.get('partidas') as FormArray;
  // }
  // deleteItem() { }

  // addTableItems():void{

  // }
}
