import { Component, OnInit} from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ItemList } from '../list/list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  itemList:ItemList[]=[];
  produtoList:any;
  produtoDetalhado?:Produto;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
  ){}

  ngOnInit() {
    this.produtoService.getProducts().subscribe(event => {
      this.produtoList = event;
      this.itemList = this.convertProdutoListToItemList(this.produtoList);
    })
  }

  convertProdutoListToItemList(produto:Produto[]){
    let itemList:ItemList[]=[];
    produto.forEach((produto: Produto) => {
      let item:ItemList = {nome:produto.nome ,descricao:produto.descricao,rating:produto.rating,image:produto.foto, data:produto};
      itemList.push(item);
    });
    return itemList;
  }

  getDetalhesProduto(produtoSelecionado:Produto) {
    this.produtoService.setProdutoSelecionado (produtoSelecionado);
  }
}
