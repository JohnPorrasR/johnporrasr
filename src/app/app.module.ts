import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Rutas
import { app_routing } from './app.routes';
import { OcioModule } from './views/ocio/ocio.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { HeaderComponent } from './views/components/header/header.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { ContactoComponent } from './views/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
    OcioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
