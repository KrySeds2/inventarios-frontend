import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { JwtService } from '@core/services/jwt.service';
import { TranslateService } from '@ngx-translate/core';
import { InputImageComponent } from '@shared/modules/fields-form/input-image/input-image.component';
import { DropDownModel } from '@shared/services/common/model/dropdown.Model';
// import { StreamCompanyIdService } from '@shared/services/common/stream-company-id.service';
import { ProfilesCrudService } from '@shared/services/profiles/profiles-crud.service';
import { ProfileResponse } from '@shared/services/profiles/responses/profileResponse';
import { FieldValidatorsService } from '@core/services/field-validators.service';
import { map } from 'rxjs/operators';
import { ImageComponent } from '@shared/components/image/image.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('imageComponent') imageComponent: ImageComponent;
  libraryTranslate = 'UsersModule.formComponent.';
  libraryTranslateGlobal = 'global.';
  @Input() formData: FormGroup;
  profiles: DropDownModel[] = [];
  idCompany: string;
  execute = false;
  companyType: string = '';
  constructor(
    public validateErrors: FieldValidatorsService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private profilesService: ProfilesCrudService,
    private jwtService: JwtService,
    private cd:ChangeDetectorRef,
    // private streamCompanyIdService: StreamCompanyIdService
    ) {
      this.getProfiles();
    }

  ngOnInit(): void {

  }



  getProfiles():void{
    this.profilesService.getAll().subscribe(
      (response:any) => {
        this.profiles = response.map(
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
}
