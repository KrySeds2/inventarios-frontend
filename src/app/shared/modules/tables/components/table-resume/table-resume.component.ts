import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-table-resume',
  templateUrl: './table-resume.component.html',
  styleUrls: ['./table-resume.component.scss']
})
export class TableResumeComponent implements OnInit {
  _resume!:TableResume[];
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
  @Input()
  get resume (){
    return this._resume;
  }
  set resume (value){
    this.cd.detectChanges();
    this._resume = value;
    this.cd.detectChanges();
  }
}


export interface TableResume{
  label:string;
  value:string;
  color:string;
}
