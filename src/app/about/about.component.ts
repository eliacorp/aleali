import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../shared/variables.service';
import { Location } from '@angular/common';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _globalService: GlobalService, location: Location) { }

  ngOnInit() {
    this._globalService.setLoading(false);
    this._globalService.pageLoading=false;
  }

}
