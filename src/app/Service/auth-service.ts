
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class AuthService {

  private api = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  login(data: any) {
    return this.http.post(`${this.api}/login`, data);
  }

  logout() {
    return this.http.post(`${this.api}/logout`, {});
  }
}
