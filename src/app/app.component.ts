import { Component, HostBinding, HostListener} from '@angular/core';
import { fadeInAnimation } from './_animation/index';
import {GlobalService} from './shared/variables.service';

// import {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(
    private _globalService: GlobalService
  ) { }


  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
}
