import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = "http://127.0.0.1:8000/api/registerBailleur";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  postBailleur(user: any): Observable<any> {
    return this.http.post<any>(this.baseURL, user);
  }
  getBailleurs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL);
  }
}