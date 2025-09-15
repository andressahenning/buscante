import { LivrosResultado, Livro, Item, VolumeInfo, ImageLinks } from './../../models/interfaces';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {
  listaLivros: Livro[];
  campoBusca: string = '';
  subscription: Subscription;
  livro: Livro

  constructor(
    private service: LivroService
  ) { }

  buscarLivros(){
    this.subscription = this.service.buscar(this.campoBusca).subscribe({
      next: (items) => {
        this.listaLivros = this.livrosResultadoParaLivros(items)
      },
      error: erro => console.error(erro)
    });
  }

  livrosResultadoParaLivros(items): Livro[] {
    const livros: Livro[] = [];

    items.forEach(item => {
      const info = item.volumeInfo;
      livros.push(this.livro = {
        title: info.title,
        authors: info.authors,
        publisher: info.publisher,
        publishedDate: info.publishedDate,
        description: info.description,
        previewLink: info.previewLink,
        thumbnail: info.imageLinks?.thumbnail,
      })
    });
    return livros
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}