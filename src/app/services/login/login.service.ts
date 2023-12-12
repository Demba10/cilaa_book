import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://127.0.0.1:8000/api/login";
  userAuth!: any;

  constructor(private router: Router, private http: HttpClient) { }

  getBailleurs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL);
  }
  connexion(email: string, psw: string) {
    // if (this.users.find(ele => ele.email == this.email && ele.password == this.psw)) {
    //   this.userAuth$ = this.email;
    if (email == "andre@gmail.com" && psw == "passer") {
      this.userAuth = email;
      this.router.navigate(['/accueil'])
    } else {
      Swal.fire({
        title: 'erreur',
        text: 'Données invalides',
        icon: 'error'
      })
    }
  }
  currentUser() {
    return this.userAuth;
  }

  posLogin(user: any): Observable<any> {
    return this.http.post<any>(this.baseURL, user);
  }
  getLogin(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }
}