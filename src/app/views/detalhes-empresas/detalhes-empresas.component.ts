import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id?:string;
  empresasList:Empresa[]=[];

  constructor(
    private empresaService: EmpresaService,
    private Activatedroute:ActivatedRoute,
  ){}

  ngOnInit(): void {

    this.Activatedroute.queryParamMap
       .subscribe(params => {
             this.id = params.get('id')||undefined;   
             this.getEmpresaSelecionado(this.id!)
    });

    

    // this.empresaService.empresaSelecionada.subscribe(event => {
    //   this.empresa = event;
    //   this.itemDetalhesHeader = this.convertEmpresasToItemDetalhes(this.empresa);
    // });
  }

  getEmpresaSelecionado (id:string) {
    this.empresaService.getEmpresasList().subscribe(event => {
      this.empresasList = event;
      this.empresa= this.empresasList.find(item => item.id == new Number(id))!;
      this.itemDetalhesHeader = this.convertEmpresasToItemDetalhes(this.empresa);
    });
  }

  convertEmpresasToItemDetalhes (empresa:Empresa) {
    let item:ItemDetalhes = {descricao:empresa.apresentacao,foto:empresa.logo,nome:empresa.nome,rating:empresa.rating,endereco:empresa.endereco+' CEP: '+empresa.cep}
    return item;
  }
}
