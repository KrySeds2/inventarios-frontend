import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {
  columns = [
    { field: 'numero', title: 'No°' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'idUnicoEscaneo', title: 'ID unico para escanear' },
    { field: 'estado', title: 'Estado' },
    { field: 'edit', title: 'edit' },
    { field: 'eliminar', title: 'Eliminar' },
  ];
  data = [
    { numero: 1, nombre: 'MTP-1', idUnicoEscaneo: ' 45896-0324-5632', estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
    { numero: 2, nombre: 'MTP-2', idUnicoEscaneo: '9653-55454-4512', estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
    { numero: 3, nombre: 'MTP-3', idUnicoEscaneo: '6524-5631-56544', estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
    { numero: 4, nombre: 'MTP-4', idUnicoEscaneo: '63963-14523-4563', estado: false, edit: { icono: 'pi pi-file-edit' }, eliminar: { icono: 'pi pi-trash' } },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
