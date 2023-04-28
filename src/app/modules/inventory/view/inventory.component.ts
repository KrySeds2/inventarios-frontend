import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  columns  = [
    { field: 'numero', title: 'No°' },
    { field: 'almacen', title: 'Almacen' },
    { field: 'anaquel', title: 'Anaquel' },
    { field: 'materiaPrima', title: 'Materia Prima' },
    { field: 'cantidad', title: 'Cantidad' },
    { field: 'idUnicoPaquete', title: 'Id unico del paquete' },
    { field: 'edit', title: 'edit' },
    { field: 'fechaCaducidad', title: 'Fecha de caducidad' },
    { field: 'estado', title: 'Estado' },
    { field: 'eliminar', title: 'Eliminar' },
  ];
  data = [
    { numero: 1, almacen: 'ALM-1', anaquel: 'ANQL-1', materiaPrima: 'MTP-1',cantidad: 2,idUnicoPaquete:'45896-0324-5632',edit: { icono: 'pi pi-file-edit' },fechaCaducidad:'12-03-2023', estado: false,  eliminar: { icono: 'pi pi-trash' } },
    { numero: 2, almacen: 'ALM-2', anaquel: 'ANQL-2',materiaPrima: 'MTP-2',cantidad: 10,idUnicoPaquete:'9653-55454-4512',edit: { icono: 'pi pi-file-edit' },fechaCaducidad:'15-03-2023', estado: false,  eliminar: { icono: 'pi pi-trash' } },
    { numero: 3, almacen: 'ALM-3', anaquel: 'ANQL-3',materiaPrima: 'MTP-3',cantidad: 100,idUnicoPaquete:'6524-5632-56544', edit: { icono: 'pi pi-file-edit' },fechaCaducidad:'25-03-2023', estado: false, eliminar: { icono: 'pi pi-trash' } },
    { numero: 4, almacen: 'ALM-4', anaquel: 'ANQL-4',materiaPrima: 'MTP-4',cantidad: 50,idUnicoPaquete:'63963-14523-4563',edit: { icono: 'pi pi-file-edit' },fechaCaducidad:'02-04-2023', estado: false,  eliminar: { icono: 'pi pi-trash' } },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
