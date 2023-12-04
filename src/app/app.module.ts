import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { AddVehiclePopupComponent } from './add-vehicle-popup/add-vehicle-popup.component';
import { ToastrModule } from 'ngx-toastr';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BookingComponent } from './booking/booking.component';
import { MatCardModule } from '@angular/material/card';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookingListComponent } from './booking-list/booking-list.component';
// import { AuthService } from './Services/authService';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LandingComponent,
    HeaderComponent,
    HomeComponent,
    AddVehiclePopupComponent,
    BookingComponent,
    AppointmentsComponent,
    BookingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
