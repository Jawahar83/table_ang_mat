import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private baseURL = "https://springrestapi-production.up.railway.app/persons"

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.baseURL)
  }
  deleteData(rollNo: number)  {
    const url = `${this.baseURL}/${rollNo}`;
    return this.http.delete(url);
  }
}
