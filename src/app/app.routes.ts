import { RouterModule, Routes } from '@angular/router';

import {
    InicioComponent,
    GaleriaComponent,
    ArticulosComponent,
    ContactoComponent,
    ServiciosComponent
} from './index.paginas';

const app_routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'ocio', component: GaleriaComponent},
    {path: 'blog', component: ArticulosComponent},
    {path: 'contactame', component: ContactoComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: '**', pathMatch: 'full' , redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });