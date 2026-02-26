import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
loginform: FormGroup;

constructor(private fb: FormBuilder,  private auth: AuthService, private router: Router) {
   this.loginform = this.fb.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['',[Validators.required, Validators.minLength(6)]],
   });
 }

onSubmit() {
    if (this.loginform.invalid) return;

    this.auth.login(this.loginform.value).subscribe({
      next: (res: any) => {
        alert("Login realizado");
        console.log(res.user);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert("Email ou senha inválidos");
      }
    });
  }
}


