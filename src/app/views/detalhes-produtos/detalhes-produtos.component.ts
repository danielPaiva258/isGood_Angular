import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id?:string;
  produtoList:Produto[]=[];

  constructor(
    private produtoService: ProdutoService,
    private Activatedroute:ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.Activatedroute.queryParamMap
       .subscribe(params => {
             this.id = params.get('id')||undefined;   
             console.log(this.id)  
             this.getProdutoSelecionado(this.id!);
    });
  }

  getProdutoSelecionado (id:string) {
    this.produtoService.getProducts().subscribe(event => {
      this.produtoList = event;
      this.produto= this.produtoList.find(item => item.id == new Number(id))!;
      this.itemDetalhesHeader = this.convertProdutosToItemDetalhes(this.produto);
    });
  }

  convertProdutosToItemDetalhes (produto:Produto) {
    let item:ItemDetalhes = {descricao:produto.descricao,foto:produto.foto,nome:produto.nome,rating:produto.rating}
    return item;
  }
}
