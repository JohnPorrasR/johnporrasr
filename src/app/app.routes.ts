import { RouterModule, Routes } from '@angular/router';

import {
    InicioComponent,
    GaleriaComponent,
    ArticulosComponent,
    DepartamentosComponent,
    ContactoComponent,
    ServiciosComponent,
    PostsComponent
} from './index.paginas';

const app_routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'ocio', component: DepartamentosComponent},
    {path: 'blog', component: ArticulosComponent},
    {path: 'post', component: PostsComponent},
    {path: 'contactame', component: ContactoComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: '**', pathMatch: 'full' , redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });