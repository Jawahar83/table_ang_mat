import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }


  public doregistration(student: Student){
    return this.http.post("https://springrestapi-production.up.railway.app/persons",student,{responseType: 'Text' as 'json'})
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`https://springrestapi-production.up.railway.app/persons/{rollNo}`);
  }

}
