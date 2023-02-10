import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ItemList } from '../list/list.component';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit{
  empresaList: any;
  itemList:ItemList[]=[];

  constructor(
    private empresaService: EmpresaService
  ){}
  ngOnInit(): void {
    this.empresaService.getEmpresasList().subscribe(event => {
      this.empresaList = event;
      console.log(this.empresaList)
      this.itemList = this.convertEmpresaListToItemList();
      console.log(this.itemList)
    });
  }

  convertEmpresaListToItemList(){
    let itemList:ItemList[]=[];
    this.empresaList.forEach((empresa: Empresa) => {
      let item:ItemList = {nome:empresa.nome ,descricao:empresa.apresentacao,rating:empresa.rating,image:empresa.logo, data:empresa};
      console.log(item)
      itemList.push(item);
      console.log(itemList)
    });
    return itemList;
  }

  getDetalhesEmpresa(empresaSelecionada:Empresa) {
    this.empresaService.setEmpresaSelecionado(empresaSelecionada);
  }
}
