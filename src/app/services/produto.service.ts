import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Produto } from 'src/app/models/Produto';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {  

  private produtoSelecionadoSource = new BehaviorSubject<any>({});
  produtoSelecionado = this.produtoSelecionadoSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getProducts(){
    return this.http.get<Produto>('http://localhost:8080/produto/listar');
  }

  setProdutoSelecionado (produto:Produto) {
    this.produtoSelecionadoSource.next(produto);
  }

  getProdutoSelectionado() {
    return this.produtoSelecionado;
  }
}
