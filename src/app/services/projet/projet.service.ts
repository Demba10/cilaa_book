import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private baseURL = "http://127.0.0.1:8000/api/indexHome";
  private PostProjet = "http://127.0.0.1:8000/api/projet";

  constructor(
    private http: HttpClient
  ) { }

  postProjet(projet: any): Observable<any> {
    return this.http.post<any>(this.PostProjet, projet);
  }
  supprimerProjet(id: number): Observable<any> {
    return this.http.delete<any>(`${this.postProjet}/${id}`);
  }
  getProjet(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }

}