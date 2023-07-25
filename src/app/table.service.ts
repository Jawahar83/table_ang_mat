// Import necessary modules and components
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  // Define the base URL for the API endpoints
  private baseURL = "https://springrestapi-production.up.railway.app/persons"

  constructor(private http: HttpClient) { }

  // Function to fetch data from the server using a GET request
  getData() {
    // Send a GET request to the specified endpoint to fetch data
    return this.http.get(this.baseURL);
  }

  // Function to delete data from the server using a DELETE request
  deleteData(rollNo: number) {
    // Construct the URL for the specific data to be deleted using the roll number as a path parameter
    const url = `${this.baseURL}/${rollNo}`;

    // Send a DELETE request to the specified endpoint with the constructed URL
    return this.http.delete(url);
  }
}
