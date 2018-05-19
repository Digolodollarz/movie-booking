import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingComponent} from './booking/booking.component';
import {DetailComponent} from './detail/detail.component';
// import {LoginComponent} from './login/login.component';
// import {AccessDeniedComponent} from './access-denied/access-denied.component';
// import {LogoutComponent} from './logout/logout.component';

const appRoutes = [
  // {path: 'login', component: LoginComponent},
  // {path: 'logout', component: LogoutComponent},
  // {path: 'access-denied', component: AccessDeniedComponent},
  {path: 'book', component: BookingComponent},
  {path: 'detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
