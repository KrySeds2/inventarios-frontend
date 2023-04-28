import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.component.html',
  styleUrls: ['./receptions.component.scss']
})
export class ReceptionsComponent implements OnInit {
  columns  = [
    { field: 'numero', title: 'No°' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'estado', title: 'Estado' },
    { field: 'edit', title: 'edit' },
    { field: 'eliminar', title: 'Eliminar' },
  ];
  data = [
    { numero: 1, nombre: 'ANQL-1', anaqueles: 3, verAnaqueles: { icono: 'pi pi-eye' }, estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
    { numero: 2, nombre: 'ANQL-2', anaqueles: 4, verAnaqueles: { icono: 'pi pi-eye' }, estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
    { numero: 3, nombre: 'ANQL-3', anaqueles: 5, verAnaqueles: { icono: 'pi pi-eye' }, estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
    { numero: 4, nombre: 'ANQL-4', anaqueles: 2, verAnaqueles: { icono: 'pi pi-eye' }, estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
  ];
  constructor() { }

  ngOnInit(): void {
    // Recuperar los datos guardados del almacenamiento local y actualizar los productos correspondientes
    // let dataGuardada = localStorage.getItem('data');
    // if (dataGuardada !== null) {
    //   this.data = JSON.parse(dataGuardada);
    // }
  }

  // handleChange(row: any) {
  //   row.estado = !row.estado;
  //   this.guardarEstadoSwitchs();
  //   console.log(row);
  // }

  // guardarEstadoSwitchs() {
  //   localStorage.setItem('data', JSON.stringify(this.data));
  // }

}
