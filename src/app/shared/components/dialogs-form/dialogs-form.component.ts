import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingComponent } from '../../modules/dialogs/loading/loading.component';
import { DialogConfirmComponent } from '../../modules/dialogs/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-dialogs-form',
  templateUrl: './dialogs-form.component.html',
  styleUrls: ['./dialogs-form.component.scss']
})
export class DialogsFormComponent {
  @ViewChild('loading') loading!: LoadingComponent;
  @ViewChild('success') success!: DialogConfirmComponent;
  @ViewChild('error') error!: DialogConfirmComponent;
  @Output('back') _back: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output('retry') retry: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Input() update = false;
  @Input() customRouteBack = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute){}
  back(){
    let patchRouteBack =  (this.update)?'../../': '../';
    const route = (this.customRouteBack === '')?patchRouteBack:this.customRouteBack;
    this.router.navigate([route], { relativeTo: this.route });
    this._back.emit(true);
  }
  errorRetry(){
    this.retry.emit(true);
  }
}
