import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private baseURL = "http://127.0.0.1:8000/api/indexHome";
  private PostProjet = "http://127.0.0.1:8000/api/projet";
  private PostProj = "http://127.0.0.1:8000/api/modifierProjet";
  private details = "http://127.0.0.1:8000/api/showHome";

  constructor(
    private http: HttpClient
  ) { }

  postProjet(projet: any): Observable<any> {
    return this.http.post<any>(this.PostProjet, projet);
  }
  supprimerProjet(id: number): Observable<any> {
    return this.http.delete<any>(`${this.PostProjet}/${id}`);
  }
  misajourProjet(id: any, projet: any): Observable<any> {
    return this.http.post<any>(`${this.PostProj}/${id}`, projet);
  }
  detailsProjet(id: number): Observable<any> {
    return this.http.get<any>(`${this.details}/${id}`);
  }
  getProjet(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }
  getProjetById(id: number): Observable<any> {
    return this.http.get<any>(`${this.PostProjet}/${id}`);
  }
}