import { Routes } from '@angular/router';
import { Index } from './components/index/index';
import { Cadastro } from './components/cadastro/cadastro';
import { Dashboard} from './components/dashboard/dashboard';
import { AuthGuard } from './Service/auth.guard';

export const routes: Routes = [
    {path:"", component: Index},
    { path:"cadastro", component: Cadastro},
    {path:"dashboard", component: Dashboard, canActivate: [AuthGuard]},
    {path:"musica", loadComponent: () => import('./components/musica/musica').then(m => m.Musica), canActivate: [AuthGuard]}



]
