import { Injectable } from '@angular/core';
import { Empresa } from '../models/Empresa';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(
    private http: HttpClient
  ) { }

  getEmpresasList(){
    return this.http.get<Empresa[]>('http://localhost:8080/empresa/listar');
  }

}
