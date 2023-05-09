import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-view-error',
  templateUrl: './view-error.component.html',
  styleUrls: ['./view-error.component.scss'],
  animations: [
    trigger('animation', [
        state('visible', style({
            transform: 'translateY(0)',
            opacity: 1
        })),
        transition('void => *', [
            style({transform: 'translateY(50%)', opacity: 0}),
            animate('300ms ease-out')
        ]),
        transition('* => void', [
            animate(('250ms ease-in'), style({
                height: 0,
                opacity: 0,
                transform: 'translateY(50%)'
            }))
        ])
    ])
]
})
export class ViewErrorComponent implements OnInit, OnDestroy {
  @Input() custom = false;

  displayMessage = false;
  errorResponse = true;
  error: any = {
    timestamp: '',
    status: '',
    error: '',
    message: '',
    trace: ''
  };
  constructor() { }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }
  @Input()
  get configError(){
    return this.error;
  }
  set configError(value: any){
    this.error = value;
  }
}
export interface ConfigViewError{
  code: string;
  message: string;
}
export interface ErrorResponse{
  timestamp: string;
  status: string;
  error: string;
  message: string;
  trace: string;
  code?: string;
}
