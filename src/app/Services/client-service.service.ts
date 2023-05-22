import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Classes/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://localhost:8082/api/clients';

  constructor(private http: HttpClient) {}

  addClient(client: Client): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, client);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  deleteClient(id: number): Observable<boolean> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<boolean>(url);
  }

  updateClient(client: Client, id: number): Observable<Client> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Client>(url, client);
  }

  getClientById(id: number): Observable<Client> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  getClientsByName(nom: string): Observable<Client[]> {
    const url = `${this.apiUrl}?nom=${nom}`;
    return this.http.get<Client[]>(url);
  }
}
