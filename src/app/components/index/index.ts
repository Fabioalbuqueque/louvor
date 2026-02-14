import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {

  Nome: string = "Fabio";
  Cargo: string = "Guitarrista";
  Data: Date = new Date();

}
