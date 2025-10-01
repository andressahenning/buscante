import { Item, LivrosResultado } from './../../models/interfaces';
import { Component } from '@angular/core';
import { catchError, debounceTime, EMPTY, filter, map, switchMap, distinctUntilChanged, tap, of } from 'rxjs';
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
  mensagemErro = '';
  totalDeLivros = 0;

  constructor(
    private service: LivroService
  ) { }

  // $ -> convensão para representar um observable
  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSE),
    filter(valorDigitado => valorDigitado.length >= 3),
    distinctUntilChanged(),
    switchMap(valorDigitado => this.service.buscar(valorDigitado)),
    tap(resultado => {
      this.totalDeLivros = resultado.totalItems ?? 0;
      this.mensagemErro = this.totalDeLivros === 0 ? 'Nenhum resultado encontrado' : '';
    }),
    map(resultado => resultado.items ?? []),
    map(items => this.livrosResultadoParaLivros(items)),
    catchError(() => {
      this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a página';
      // Retorna um array vazio para limpar a tela e manter o observable ativo
      return of([]);
    })
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }
}