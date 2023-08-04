import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JwtService } from '@core/services/jwt.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';
import { LoadingComponent } from '@shared/modules/dialogs/loading/loading.component';
import { TableHead } from '@shared/modules/tables/models/tableHead';
import { UserResponse } from '@shared/services/users/responses/userResponse';
import { UsersService } from '@shared/services/users/users.service';
import { environment } from 'src/environments/environment';
import { UserRowTable } from '../../models/userRowTable';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, AfterViewInit {
  @ViewChild('dialogLoading') loadingComponent:LoadingComponent;
  libraryTranslate = 'UsersModule.viewComponent.';
  @ViewChild('dialogSuccess') dialogSuccess: DialogConfirmComponent;

  rowsTable: UserRowTable[];
  columnsTable: TableHead<UserRowTable>[] = [
    {header: 'No', field: 'index', width: '90px', maxWidth: '100px', align: 'center' },
    { header: 'Imagen', field: 'image', width: '90px',maxWidth: '90px', align: 'center', custom: true, exportable: false },
    {header: 'Nombre', field: 'username', width: '200px', align: 'center' },
    // { header: 'Correo', field: 'email', width: '200px', align: 'center' },
    { header: 'Perfil', field: 'profile', width: '200px', align: 'center' },
    { header: 'Editar', field: 'edit', width: '90px',maxWidth: '90px', align: 'center', permit: 'write', custom: true, exportable: false },
    { header: 'Estado', field: 'status', width: '90px',maxWidth: '90px', align: 'center', permit: 'write', custom: true },
  ];
  usuarioResponse: UserResponse[];
  resume: any[];
  // idCompany: string;
  tempPassword:string;

  constructor(
   // private usuarios: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
    private translate: TranslateService,
    private jwtService: JwtService) { }
    ngAfterViewInit(): void {
      this.setResume();
      this.loadingComponent.setDisplay(true);
      this.fetchItems();
      // this.listItems;
    }


  ngOnInit(): void {
    this.setResume();

  }

  fetchItems():void {
    this.userService.getAll().subscribe(
      (response: UserResponse[]) => {
        console.log(response);
        this.usuarioResponse = response;
        this.rowsTable = response.map(
          (row: any, index) => {
            return {

              id: row.id,
              index: index + 1,
              username: row.username,
              profile: row.profile,
              image: (row.imageId)?environment.image+row.imageId:environment.noImage,
              status: row.status
            };
          } );
          this.setResume();
          this.loadingComponent.setDisplay(false);
        }, error => {
          this.loadingComponent.setDisplay(false);
        }
      );
    }

  selectedEditConfirm(item: UserRowTable): void {
    if(this.jwtService.userInfo().id === item.id){
      alert('No es posible editarte a ti mismo.');
      return;
    }
    this.router.navigate(['../edit', item?.id], { relativeTo: this.route });
  }

  selectedStatusConfirm(item: UserRowTable): void {
    if(this.jwtService.userInfo().id === item.id){
      alert('No es posible editarte a ti mismo.');
      return;
    }
    // position in rowTable
    const index = this.rowsTable.findIndex(row => row.id === item.id);
    // position in response
    const position = item.index - 1;
    this.usuarioResponse[position].status = !this.usuarioResponse[position].status;

    this.userService.update({status:this.usuarioResponse[position].status}, item.id).subscribe(
      (response: any) => {
        console.log(response);
        this.rowsTable[index].status = !this.rowsTable[index].status;
        this.setResume();

        if (response.updatePassword) {
          this.tempPassword = response.newPassword;
          this.dialogSuccess.setDisplay(true)
        }

      },(error:any)=>{
        this.changePassword()
      }
    );
  }

  changePassword(){

  }


  setResume(): void {
    this.rowsTable = (this.rowsTable?.length) ? this.rowsTable : [];
    const total = (this.rowsTable?.length) ? this.rowsTable?.length : 0 ;
    let enabled = 0;
    let disable = 0;

    for (const item of this.rowsTable) {
      if (item.status) {
        enabled++;
      } else {
        disable++;
      }

    }
    this.resume = [
      {
        label:'Total de registros',
        value: total.toString(),
        color: '--CP003',
      },
      {
        label:'Habilitados',
        value: enabled.toString(),
        color: '--CB001',
      },
      {
        label:'Deshabilitados',
        value: disable.toString(),
        color: '--CS003',
      },
    ];
  }
}

