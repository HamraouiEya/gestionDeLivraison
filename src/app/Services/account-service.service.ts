import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../Classes/profile';
import {User} from "../Classes/user";

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  private apiUrl = 'http://localhost:8082';
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<string> {
    return this.http.post<string>(
      `${this.apiUrl}/authenticate`,
      {
        username,
        password,
      },
      {
        responseType: 'text' as 'json',
      }
    );
  }

  getProfile(): Observable<Profile> {
    const token = localStorage.getItem('user');
    let header = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Profile>(`${this.apiUrl}/profile`, {
      headers: header,
    });
  }
  addNewUser(username: string, password: string, email: string, confirmPassword: string): Observable<User> {
    const url = `${this.apiUrl}/accounts/users`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('email', email);
    body.set('confirmPassword', confirmPassword);

    return this.http.post<User>(url, body.toString(), { headers: headers });
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/accounts/users`);
  }
  deleteUser(username: string): Observable<void> {
    const url = `${this.apiUrl}/accounts/users/${username}`;
    return this.http.delete<void>(url);
  }
  loadUserByUsername(username: string): Observable<User> {
    const url = `${this.apiUrl}/accounts/users/${username}`;
    return this.http.get<User>(url);
  }
}
