import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
 registerform: FormGroup;

 constructor(private fb: FormBuilder,  private http: HttpClient) {
   this.registerform = this.fb.group({
     name: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.email]],
     password: ['',[Validators.required, Validators.minLength(6)]],
   });
 }

  onSubmit() {
   if( this.registerform.valid) {
    this.http.post('http://localhost:3000/api/register', this.registerform.value).subscribe({
          next: (res) => {
            console.log("Salvo:", res);
            alert("Cadastro realizado!");
            this.registerform.reset();
          },
          error: (err) => {
            console.error("Erro:", err);
            alert("Erro ao cadastrar. Tente novamente.");
          }
        });
   }
    console.log(this.registerform.value);
  }

}
