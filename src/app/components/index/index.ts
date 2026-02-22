import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
loginform: FormGroup;

constructor(private fb: FormBuilder) {
   this.loginform = this.fb.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['',[Validators.required, Validators.minLength(6)]],
   });
 }





onSubmit() {  console.log(this.loginform.value);}

}
