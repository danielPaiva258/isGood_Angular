import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesEmpresasComponent } from './views/detalhes-empresas/detalhes-empresas.component';
import { DetalhesProdutosComponent } from './views/detalhes-produtos/detalhes-produtos.component';
import { EmpresasComponent } from './views/empresas/empresas.component';
import { ProdutosComponent } from './views/produtos/produtos.component';

const routes: Routes = [
  { 
    path: '',   redirectTo: '/produtos', pathMatch: 'full' 
  },
  {
    path:"produtos",
    component:ProdutosComponent
  },
  {
    path:"empresas",
    component:EmpresasComponent
  },
  {
    path:"detalhesProdutos",
    component:DetalhesProdutosComponent
  },
  {
    path:"detalhesEmpresas",
    component:DetalhesEmpresasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
