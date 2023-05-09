import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDirective } from './body.directive';
import { CaptionDirective } from './caption.directive';
import { ColGroupDirective } from './colGroup.directive';
import { HeaderDirective } from './header.directive';
import { IconDirective } from './icon.directive';
import { FooterDirective } from './footer.directive';
import { ButtonsDirective} from'./buttons.directive'




@NgModule({
  declarations: [
    BodyDirective,
    CaptionDirective,
    ColGroupDirective,
    HeaderDirective,
    IconDirective,
    FooterDirective,
    ButtonsDirective
   ],
  imports: [
    CommonModule
  ],
  exports:[
    BodyDirective,
    CaptionDirective,
    ColGroupDirective,
    HeaderDirective,
    IconDirective,
    FooterDirective,
    ButtonsDirective
  ]
})
export class DirectivesModule { }
