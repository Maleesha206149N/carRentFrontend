import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddVehiclePopupComponent } from '../add-vehicle-popup/add-vehicle-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
//header component
export class HeaderComponent {
  isAuthenticated: boolean = false;
  isCarRenter: boolean = false; // New property to check if the user is a CarRenter

  constructor(private router: Router,private dialog: MatDialog ) {}

  ngOnInit() {
    // Check if authentication token is present in local storage
    const authToken = localStorage.getItem('authToken');
    this.isAuthenticated = authToken !== null;

    // Check the role to determine if the user is a CarRenter
    if (authToken) {
      // Check the role to determine if the user is a CarRenter
      const decodedToken = this.decodeToken(authToken);
      const userRole = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      this.isCarRenter = userRole === 'CarRenter';
    }
  }

  //logout button function
  logout() {
    console.log('Logout button clicked');
    localStorage.removeItem('authToken');
    this.router.navigate(['/home']);
    window.location.reload();
  }

  // method to decode the JWT token
  decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  openVehicleAddDialog(): void {
    const dialogRef = this.dialog.open(AddVehiclePopupComponent, {
      width: '500px',
      panelClass: 'custom-dialog',
    });
  }
}
