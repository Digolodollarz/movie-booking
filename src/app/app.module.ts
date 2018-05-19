import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { BookingComponent } from './booking/booking.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    DetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
