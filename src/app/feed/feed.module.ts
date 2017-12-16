import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { FeedComponent } from './feed.component';
import {StylingComponent} from './styling/styling.component';
import {StylingDetailComponent} from './styling/styling-detail/styling-detail.component';
import {FeedDetailComponent} from './feed-detail/feed-detail.component';
// import { ProductFilterPipe } from './product-filter.pipe';
import { FeedGuard } from './feed-guard.service';
import { PrismicService } from '../shared/prismic.service';
import {SafePipe} from './../shared/safeUrl.pipe';

import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgDraggableModule } from 'angular-draggable';

@NgModule({
    declarations: [
        FeedComponent,
        FeedDetailComponent,
        StylingComponent,
        StylingDetailComponent
        // ProductFilterPipe
    ],
    imports: [
        SharedModule,
        BrowserAnimationsModule,
        NgDraggableModule,
        RouterModule.forChild([
          // { path: '/event', component: EventComponent },

          { path: 'look/:id', component: FeedDetailComponent },
          { path: 'fw/:id', component: FeedDetailComponent },
          // { path: '/look', component: LookComponent },
          // { path: '/fashionweek', component: FashionweekComponent },
          { path: 'editorial', component: FeedDetailComponent },
          { path: 'styling/:styling', component: StylingDetailComponent },
          { path: 'styling', component: StylingComponent },
          { path: '', component: FeedComponent }
            // { path: 'fashionweek/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
        ])
    ],
    providers: [
        FeedGuard,
        SafePipe
    ]
})
export class FeedModule {}
