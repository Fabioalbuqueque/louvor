import { Routes } from '@angular/router';
import { Index } from './components/index/index';
import { Cadastro } from './components/cadastro/cadastro';
import { Dashboard} from './components/dashboard/dashboard';

export const routes: Routes = [
    {path:"", component: Index},
    { path:"cadastro", component: Cadastro},
    {path:"dashboard", component: Dashboard}



]
