import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../Service/auth-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  user: User | null = null;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.currentUser;
    this.auth.user$.subscribe(u => this.user = u);
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }

  uploadProfileImage(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64 = e.target.result;
      if (this.user) {
        this.user.profileImage = base64;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
      }
    };
    reader.readAsDataURL(file);
  }
}
