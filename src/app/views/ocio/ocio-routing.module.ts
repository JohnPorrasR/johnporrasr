import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartamentosComponent } from '../ocio/departamentos/departamentos.component';
import { MainComponent } from '../ocio/main/main.component';
import { GaleriaComponent } from '../ocio/galeria/galeria.component';

const ocioRoutes: Routes = [
    {
        path: 'ocio',
        component: MainComponent,
        children: [
            { path: '', component: DepartamentosComponent },
            { path: 'galeria/:val', component: GaleriaComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ocioRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class OcioRoutingModule {}
