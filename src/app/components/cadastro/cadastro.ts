import { CommonModule } from '@angular/common';
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

 constructor(private fb: FormBuilder) {
   this.registerform = this.fb.group({
     name: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.email]],
     password: ['',[Validators.required, Validators.minLength(6)]],
   });
 }

  onSubmit() {
   // if( this.registerform.valid) {
    //  alert('Cadastro realizado com sucesso!');
   // }
    console.log(this.registerform.value);
  }

}
