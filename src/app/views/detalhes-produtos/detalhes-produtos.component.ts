import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ItemDetalhes } from '../detalhes-header/detalhes-header.component';
import { ProdutosComponent } from '../produtos/produtos.component';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent  implements OnInit{
  produto!:Produto;
  itemDetalhesHeader?:ItemDetalhes;

  constructor(
    private produtoService: ProdutoService,
  ){}

  ngOnInit(): void {
    this.produtoService.produtoSelecionado.subscribe(event => {
      this.produto = event;
      this.itemDetalhesHeader = this.convertProdutosToItemDetalhes(this.produto);
    });
  }

  convertProdutosToItemDetalhes (produto:Produto) {
    let item:ItemDetalhes = {descricao:produto.descricao,foto:produto.foto,nome:produto.nome,rating:produto.rating}
    return item;
  }
}
