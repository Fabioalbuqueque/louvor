
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User {
  name: string;
  emailHash: string;
  profileImage?: string;
}

@Injectable({
  providedIn: 'root',
})


export class AuthService {

  private api = 'http://localhost:3000/api';
  private userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    try {
      const stored = localStorage.getItem('currentUser');
      if (stored && stored !== 'undefined') {
        this.userSubject.next(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Erro ao restaurar usuário do localStorage:', error);
      localStorage.removeItem('currentUser');
    }
  }

  login(data: any) {
    return this.http.post<{message: string; user: User}>(`${this.api}/login`, data).pipe(
      tap(resp => {
        this.userSubject.next(resp.user);
        localStorage.setItem('currentUser', JSON.stringify(resp.user));
      })
    );
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('currentUser');
    return this.http.post(`${this.api}/logout`, {});
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }
}
