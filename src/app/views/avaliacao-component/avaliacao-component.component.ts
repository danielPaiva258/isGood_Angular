import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacao-component',
  templateUrl: './avaliacao-component.component.html',
  styleUrls: ['./avaliacao-component.component.css']
})
export class AvaliacaoComponentComponent implements OnInit{
  
  @Input() nota!:number

  contador:number[]=[];
  contadorVazio:number[]=[];

  ngOnInit(): void {
    let notaInt = Math.floor(this.nota);
    this.contador = new Array(notaInt);
    this.contadorVazio = new Array(5-notaInt)
  }
}
