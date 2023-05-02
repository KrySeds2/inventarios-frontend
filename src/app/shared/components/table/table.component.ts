import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns!: any[];
  @Input() data!: any[];
  @Input()checked: boolean;
  @Output() active = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    // Recuperar los datos guardados del almacenamiento local y actualizar los productos correspondientes
    // let dataGuardada = localStorage.getItem('data');
    // if (dataGuardada !== null) {
    //   this.data = JSON.parse(dataGuardada);
    // }
    this.actualizarNumeros();
  }

  handleChange(row: any) {
    row.estado = !row.estado;
    this.guardarEstadoSwitchs();
    console.log(row);
  }
  execute() {
    this.active.emit(this.checked);
  }
  guardarEstadoSwitchs() {
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  actualizarNumeros() {
    // Recorre el arreglo "data" y asigna el valor "index + 1" a la propiedad "numero" de cada objeto
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].numero = i + 1;
    }
  }

}
