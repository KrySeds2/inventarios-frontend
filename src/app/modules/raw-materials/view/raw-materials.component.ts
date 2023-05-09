import { Component, OnInit, ViewChild } from '@angular/core';
import { TableHead } from 'src/app/shared/modules/tables/models/tableHead';
import { RawMaterialsRow } from '../models/raw-materials-row';
import { LoadingComponent } from 'src/app/shared/modules/dialogs/components/loading/loading.component';
import { DialogErrorComponent } from 'src/app/shared/modules/dialogs/components/dialog-error/dialog-error.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RawMaterialsCrudService } from 'src/app/shared/services/raw-materials/raw-materials-crud.service';

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {
  @ViewChild('dialogLoading') loadingComponent: LoadingComponent;
  @ViewChild('dialogError') dialogError: DialogErrorComponent;
  columnsTable: TableHead<RawMaterialsRow>[] = [
    { header: 'N°', field: 'index', width: '20px', maxWidth: '50px', align: 'center', custom: false },
    { header: 'Nombre', field: 'name', width: '100px', align: 'center' },
    { header: 'ID unico para escanear', field: 'idUnicoEscanear', width: '100px', align: 'center' },
    { header: 'Estado', field: 'status', width: '50px', maxWidth: '90px', align: 'center', custom: true },
    { header: 'Editar', field: 'edit', width: '50px', maxWidth: '90px', align: 'center', custom: true, permit: 'write' },
    { header: 'Eliminar', field: 'delete', width: '50px', maxWidth: '90px', align: 'center', custom: true },

  ];
  listItems: RawMaterialsRow[] = [{
    index: 1,
    id:'12121',
    name: 'MTP-01',
    idUnicoEscanear: '45896-0324-5632',
    status: true,
  }, {
    index: 2,
    id:'2365',
    name: 'MTP-02',
    idUnicoEscanear: '9653-55454-4512',
    status: true,
  }, {
    index: 3,
    id:'5678',
    name: 'MTP-03',
    idUnicoEscanear: '6524-5631-56544',
    status: false,
  }, {
    index: 4,
    id:'98765',
    name: 'MTP-04',
    idUnicoEscanear: '63963-14523-4563',
    status: true,
  }];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private rawMaterialsCrudService: RawMaterialsCrudService
  ) { }

  ngOnInit(): void {
    this.listItems;
  }
  selectedEditConfirm(item: RawMaterialsRow): void {
    this.router.navigate(['./edit', item?.id], { relativeTo: this.route });
  }
}
