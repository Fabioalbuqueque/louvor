import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-musica',
  imports: [],
  templateUrl: './musica.html',
  styleUrl: './musica.css',
})
export class Musica {
  busca = "";
  resultados: any[] = [];


  constructor(private http: HttpClient) {}

  pesquisar() {
  if (!this.busca) return;

  // API de letras
  this.http
    .get<any>(`https://api.lyrics.ovh/v1//${this.busca}`)
    .subscribe({
      next: (res) => {
        const musica = {
          titulo: this.busca,
          artista: "Desconhecido",
          letra: res.lyrics,
          cifra: "",
          video: this.gerarYoutube(this.busca)
        };
         this.resultados = [musica];
      },
      error: () => {
        alert("Música não encontrada");
      }
    });
}

// gera link embed YouTube por busca
gerarYoutube(nome: string) {
  const query = nome.replace(" ", "+");
  return `https://www.youtube.com/embed?listType=search&list=${query}`;
}
salvar(musica: any) {
  this.http.post("http://localhost:3000/api/musicas", musica)
    .subscribe(() => alert("Música salva"));
}
}
