import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly Apiurl= "http://localhost:5205/api/Customers/";
  private http: HttpClient = inject(HttpClient);
  constructor() { 
    this.GetCustomers();
  }

  GetCustomers():Observable<any[]>{
    return this.http.get<any>(this.Apiurl+"GetCustomers")
  }
}
