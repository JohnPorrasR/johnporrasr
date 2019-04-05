import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Rutas
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './ocio/galeria/galeria.component';
import { ArticulosComponent } from './blog/articulos/articulos.component';
import { PostsComponent } from './blog/posts/posts.component';
import { DepartamentosComponent } from './ocio/departamentos/departamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    ServiciosComponent,
    ContactoComponent,
    GaleriaComponent,
    ArticulosComponent,
    PostsComponent,
    DepartamentosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
