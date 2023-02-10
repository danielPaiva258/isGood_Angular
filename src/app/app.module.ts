import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './views/topbar/topbar.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { EmpresasComponent } from './views/empresas/empresas.component';
import { ListComponent } from './views/list/list.component';
import { DetalhesProdutosComponent } from './views/detalhes-produtos/detalhes-produtos.component';
import { DetalhesEmpresasComponent } from './views/detalhes-empresas/detalhes-empresas.component';
import { DetalhesHeaderComponent } from './views/detalhes-header/detalhes-header.component';
import { AvaliacaoComponentComponent } from './views/avaliacao-component/avaliacao-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProdutosComponent,
    EmpresasComponent,
    ListComponent,
    DetalhesProdutosComponent,
    DetalhesEmpresasComponent,
    DetalhesHeaderComponent,
    AvaliacaoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
