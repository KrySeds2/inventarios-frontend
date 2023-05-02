import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDirective } from './body.directive';
import { CaptionDirective } from './caption.directive';
import { ColGroupDirective } from './colGroup.directive';
import { HeaderDirective } from './header.directive';




@NgModule({
  declarations: [
    BodyDirective,
    CaptionDirective,
    ColGroupDirective,
    HeaderDirective,

   ],
  imports: [
    CommonModule
  ],
  exports:[
    BodyDirective,
    CaptionDirective,
    ColGroupDirective,
    HeaderDirective
  ]
})
export class DirectivesModule { }
