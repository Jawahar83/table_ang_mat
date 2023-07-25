// Import necessary modules and components
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  // Function to register a student by sending a POST request to the server
  public doregistration(student: Student) {
    // Send a POST request to the specified endpoint with the student data
    // The server response will be of type 'Text' as 'json'
    return this.http.post("https://springrestapi-production.up.railway.app/persons", student, { responseType: 'Text' as 'json' });
  }

  // Function to delete a student by sending a DELETE request to the server
  deleteEmployee(id: number): Observable<any> {
    // Send a DELETE request to the specified endpoint with the student's roll number as a path parameter
    return this.http.delete(`https://springrestapi-production.up.railway.app/persons/{rollNo}`);
  }

}
