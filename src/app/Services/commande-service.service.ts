import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../Classes/commande';
@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  private apiUrl = 'http://localhost:8082/api/commandes';

  constructor(private http: HttpClient) {}

  addCommande(commande: Commande): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, commande);
  }

  getAllCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiUrl);
  }

  getCommandeById(id: number): Observable<Commande> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Commande>(url);
  }

  deleteCommande(id: number): Observable<boolean> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<boolean>(url);
  }

  updateCommande(commande: Commande, id: number): Observable<Commande> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Commande>(url, commande);
  }
}
