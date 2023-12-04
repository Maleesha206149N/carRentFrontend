import { ChangeDetectorRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../Services/dataService';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-vehicle-popup',
  templateUrl: './add-vehicle-popup.component.html',
  styleUrls: ['./add-vehicle-popup.component.css']
})
export class AddVehiclePopupComponent {
  public imageData: string | null = null;
  car: any = {};

  constructor(private dataService: DataService, private toastr: ToastrService, private cdr: ChangeDetectorRef,private snackBar: MatSnackBar,) { }

  onSubmit() {
    // Set the image data before submitting
    this.car.imageData = this.imageData;
    this.car.Id = '';

    this.dataService.addCar(this.car).subscribe(
      (response) => {
        console.log('Success:', response);
        this.showSuccessSnackbar('Vehicle submitted successfully');
        this.resetForm();
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error:', error);
        this.showErrorSnackbar('Vehicle submission failed');
      }
    );
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageData = e.target.result;
      console.log('Image Data:', this.imageData);
    };
    reader.readAsDataURL(file);
  }
  resetForm() {
    this.car = {};
    this.imageData = null;
  }
  showSuccessSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success'], 
    });
  }
  
  
  
  showErrorSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error'], 
    });
  }
}
