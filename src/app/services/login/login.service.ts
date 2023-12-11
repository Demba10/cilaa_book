import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://127.0.0.1:8000/api/BailleurUnblock";

  constructor(private router: Router, private http: HttpClient) { }

  getBailleurs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL);
  }
} 