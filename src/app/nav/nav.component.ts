import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {GlobalService} from '../shared/variables.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('navLiState', [
      state('0', style({
        height:'0px',
        position: 'absolute'
      })),
      state('1',   style({
        height:'50px',
        position: 'relative'
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ]),
    trigger('navUlState', [
      state('0', style({
      })),
      state('1',   style({
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ])
  ]
})
export class NavComponent implements OnInit {

   @Input() isNav : number = 0;

     route: string;
     getSegment: Function= (url, index) =>{
       return url.replace(/^https?:\/\//, '').split('/')[index];
    };




     constructor(location: Location, router: Router, public _globalService: GlobalService) {


       router.events.subscribe((val) => {
        if(this.getSegment(location.path(), 1) == 'styling'){
          this.route='/styling';
          _globalService.isStyling=true;
        }else if(location.path() != ''){
           this.route = location.path();
           _globalService.isStyling=false;
        }else if(location.path() == ''){
          this.route='/';
          _globalService.isStyling=false;
        }
        //  else {
        //    this.route = 'Home'
        //  }
       });
     }


      ngOnInit() {

      }

      openNav() {
        this.isNav=1;
      }

      closeNav() {
        setTimeout(() => {
          this.isNav=0;
        }, 3000);
      }












}
