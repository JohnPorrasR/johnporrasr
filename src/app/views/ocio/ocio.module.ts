// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Componentes
import { DepartamentosComponent } from '../ocio/departamentos/departamentos.component';
import { DistritosComponent } from '../ocio/distritos/distritos.component';
import { MainComponent } from '../ocio/main/main.component';
import { GaleriaComponent } from '../ocio/galeria/galeria.component';
import { OcioRoutingModule } from '../ocio/ocio-routing.module';

@NgModule({
    declarations: [
        DepartamentosComponent,
        DistritosComponent,
        MainComponent,
        GaleriaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        OcioRoutingModule
    ],
    exports: [
        DepartamentosComponent,
        DistritosComponent,
        MainComponent
    ],
    providers: []
})

export class OcioModule {}
