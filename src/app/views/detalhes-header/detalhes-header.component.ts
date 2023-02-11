import { Component, Input } from '@angular/core';
import { Avaliacao } from 'src/app/models/Avaliacao';

@Component({
  selector: 'app-detalhes-header',
  templateUrl: './detalhes-header.component.html',
  styleUrls: ['./detalhes-header.component.css']
})
export class DetalhesHeaderComponent {

  @Input() model!:ItemDetalhes;

  getImageStyle(){
    return {'background-image': 'url('+this.model.foto+')'};
  }
}

export interface ItemDetalhes {
  nome:string,
  foto:string,
  descricao:string,
  rating:number,
  endereco?:string
}