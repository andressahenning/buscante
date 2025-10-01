import { Livro, Item } from './../../models/interfaces';
import { Component } from '@angular/core';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { FormControl } from '@angular/forms';

const PAUSE = 300;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();

  constructor(
    private service: LivroService
  ) { }

  // $ -> convensão para representar um observable
  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    filter((valorDigitado) => valorDigitado.length >= 3),
    debounceTime(PAUSE),
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
    map(items => this.livrosResultadoParaLivros(items))
  )

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }
}