import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {
  columns  = [
    { field: 'numero', title: 'No°' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'anaqueles', title: 'Anaqueles' },
    { field: 'verAnaqueles', title: 'Ver Anaqueles' },
    { field: 'estado', title: 'Estado' },
    { field: 'edit', title: 'edit' },
    { field: 'eliminar', title: 'Eliminar' },
  ];
  data = [
    { numero: 1, nombre: 'ALM-1', anaqueles: 3, verAnaqueles: { icono: 'pi pi-eye' }, estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
    { numero: 2, nombre: 'ALM-2', anaqueles: 4, verAnaqueles: { icono: 'pi pi-eye' }, estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
    { numero: 3, nombre: 'ALM-3', anaqueles: 5, verAnaqueles: { icono: 'pi pi-eye' }, estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
    { numero: 4, nombre: 'ALM-4', anaqueles: 2, verAnaqueles: { icono: 'pi pi-eye' }, estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
  ];

  constructor() { }

  ngOnInit(): void {
    // Recuperar los datos guardados del almacenamiento local y actualizar los productos correspondientes

  }



}
