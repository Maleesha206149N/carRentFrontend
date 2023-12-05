import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//car rent app home component
export class HomeComponent {
  constructor(public dialog: MatDialog, private router: Router) {}
  features = [
    { icon: 'directions_car', description: 'Easy and secure online booking capability' },
    { icon: 'cancel', description: 'Free cancellation and booking amendments' },
    { icon: 'support_agent', description: '24/7 customer support and breakdown assistance' },
    { icon: 'monetization_on', description: 'Lowest collision damage waiver rates' },
    { icon: 'airport_shuttle', description: 'Modern fleet with leading vehicle brands' },
    { icon: 'security', description: 'Unbranded vehicles for added security' },
    { icon: 'emoji_transportation', description: 'Unlimited Mileage for complete freedom' },
    { icon: 'thumb_up', description: 'Trusted positive reviews by our customers' }
  ];
  //singup button function
  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '400px',
      panelClass: 'custom-dialog',
    });
  }
}
