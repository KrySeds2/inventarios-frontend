import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() data!:Title;
  @Input() assign!:string;
}
export interface Title{
  header: string;
  subHeader: string;
}
