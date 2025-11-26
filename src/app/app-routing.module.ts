import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
    title: 'Busque um livro - Buscante'
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'Busque um livro - Buscante'
  },
  {
    path: 'contato',
    component: ContatoComponent,
    title: 'Contato'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
