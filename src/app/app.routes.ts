import { Routes } from '@angular/router';
import { Index } from './components/index/index';
import { Cadastro } from './components/cadastro/cadastro';

export const routes: Routes = [
    {path:"", component: Index},
    { path:"cadastro", component: Cadastro}
    
    

]