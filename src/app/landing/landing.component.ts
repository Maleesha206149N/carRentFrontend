import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
//landing page component
export class LandingComponent implements OnInit {
  authToken: string | null = null;
  constructor(public dialog: MatDialog, private router: Router) {}
  ngOnInit(): void {
    this.authToken = localStorage.getItem('authToken');
  }
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
  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '400px',
      panelClass: 'custom-dialog',
    });
  }

}
