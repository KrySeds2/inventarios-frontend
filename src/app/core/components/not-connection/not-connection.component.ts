import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotConnectionComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {

  }
  back(): void{
    this.location.back();
  }
  retry(){
    this.router.navigateByUrl('/');
  }
}
