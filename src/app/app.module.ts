import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FeedModule} from './feed/feed.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { ShareComponent } from './share/share.component';
import { LogoComponent } from './logo/logo.component';
import { LogotypeComponent } from './logo/logotype.component';
import { GlobalService } from './shared/variables.service';
import { EncodeURIPipe } from './shared/encodeURI.pipe';
// import { ResponsiveModule } from 'ng2-responsive'



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    ShareComponent,
    LogoComponent,
    LogotypeComponent,
    EncodeURIPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FeedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      // {path:'', redirectTo:'home', pathMatch: 'full'},
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
