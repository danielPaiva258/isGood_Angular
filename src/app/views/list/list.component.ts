import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() modelList?: ItemList[];
  @Input() detailLink?:string;
  @Output() onDetalhesClick: EventEmitter<any> = new EventEmitter();

  // getDetalhes(item: any): void {
  //   this.onDetalhesClick.emit(item.data);
  // }  

  getImageStyle(item:any){
    return {'background-image': 'url('+item.image+')'};
  }
}

export interface ItemList {
  id: number,
  nome:string,
  descricao:string,
  rating:number,
  image:string
  data: any
}