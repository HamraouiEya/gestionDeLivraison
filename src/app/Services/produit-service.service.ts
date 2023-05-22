import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../Classes/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private apiUrl = 'http://localhost:8082/api/produits';

  constructor(private http: HttpClient) {}

  addProduit(produit: Produit): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, produit);
  }

  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  deleteProduit(id: number): Observable<boolean> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<boolean>(url);
  }

  updateProduit(produit: Produit, id: number): Observable<Produit> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Produit>(url, produit);
  }

  getProduitById(id: number): Observable<Produit> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Produit>(url);
  }

  findProduitsByName(nom: string): Observable<Produit[]> {
    const url = `${this.apiUrl}/search?nom=${nom}`;
    return this.http.get<Produit[]>(url);
  }
}
