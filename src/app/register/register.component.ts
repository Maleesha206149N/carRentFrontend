import { Component } from '@angular/core';
import { DataService } from '../Services/dataService';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//User registration component
export class RegisterComponent {

  isRegistration: boolean = true;
  //User model map
  user: any = {
    username: '',
    password: '',
    role: 'Customer',
    nic: ''
  };
  loginUser: { username: string; password: string; role: string; nic: string} = {
    username: '',
    password: '',
    role: '',
    nic: ''
  };
  
  constructor(private registrationService: DataService, private router: Router,private snackBar: MatSnackBar) { }

  //User registration function
  register() {
    debugger;
    this.registrationService.register(this.user).subscribe(
      response => {
        console.log('Registration successful:', response);
        this.showSuccessSnackbar('Registered successfully');
        this.resetForm();
      },
      error => {
        console.error('Registration failed:', error);
      }
    );
  }

  //User login button function for DriveEase
  login() {
    this.registrationService.login(this.loginUser).subscribe(
      response => {
        console.log('Login successful:', response);
  
        const token = response.token;
  
        // Store the token in local storage
        localStorage.setItem('authToken', token);
  
        // Decode the token to get user information
        const decodedToken = this.decodeToken(token);
        const userNIC = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/authentication'];
  
        // Navigate to the HomeComponent and append the user NIC as a parameter
        this.router.navigate(['/home', { userNIC }]);
        window.location.reload();
      },
      error => {
        console.error('Login failed:', error);
        // Add logic to handle failed login (e.g., show error message)
      }
    );
  }

// Method to decode the JWT token
decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(jsonPayload);
}


  

  toggleMode(event: Event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    this.isRegistration = !this.isRegistration;
  }
  resetForm() {
    this.user= {};
  }
  //Success message toastr
  showSuccessSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success'], 
    });
  }
  
  
  //Error message toastr
  showErrorSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error'], 
    });
  }
}
