import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ItemDetalhes } from '../detalhes-header/detalhes-header.component';

@Component({
  selector: 'app-detalhes-empresas',
  templateUrl: './detalhes-empresas.component.html',
  styleUrls: ['./detalhes-empresas.component.css']
})
export class DetalhesEmpresasComponent implements OnInit{
  empresa!:Empresa;
  itemDetalhesHeader?:ItemDetalhes;

  constructor(
    private empresaService: EmpresaService,
  ){}

  ngOnInit(): void {
    this.empresaService.empresaSelecionada.subscribe(event => {
      this.empresa = event;
      this.itemDetalhesHeader = this.convertEmpresasToItemDetalhes(this.empresa);
    });
  }

  convertEmpresasToItemDetalhes (empresa:Empresa) {
    let item:ItemDetalhes = {descricao:empresa.apresentacao,foto:empresa.logo,nome:empresa.nome,rating:empresa.rating,endereco:empresa.endereco+' CEP: '+empresa.cep}
    return item;
  }
}
