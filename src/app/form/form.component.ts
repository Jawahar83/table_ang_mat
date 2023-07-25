import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // The studentForm variable to hold the Angular form group
  studentForm: FormGroup;

  // Variable to store the response message from the service
  message: any;

  // Constructor with the formBuilder and the student service injected
  constructor(
    private formBuilder: FormBuilder,
    private service: StudentServiceService
  ) {
    // Create the studentForm FormGroup with form control validators
    this.studentForm = this.formBuilder.group({
      rollNo: ['', [Validators.required, Validators.minLength(7)]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // ngOnInit lifecycle hook, usually used for initialization, but empty in this case
  }

  // Function to handle form submission
  public registernow() {
    // Check if the form is valid
    if (this.studentForm.valid) {
      // Call the doregistration() function from the StudentService to register the student
      // The response is stored in the 'resp' variable as an Observable
      let resp = this.service.doregistration(this.studentForm.value);

      // Subscribe to the response Observable to get the response data
      // and assign it to the 'message' variable
      resp.subscribe((data) => (this.message = data));

      // Reset the form after successful submission
      this.studentForm.reset();
    } else {
      // If the form is invalid, mark all form controls as touched to display error messages
      Object.values(this.studentForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
