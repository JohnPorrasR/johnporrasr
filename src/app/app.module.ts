import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Rutas
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { HeaderComponent } from './views/components/header/header.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { GaleriaComponent } from './views/ocio/galeria/galeria.component';
import { ArticulosComponent } from './views/blog/articulos/articulos.component';
import { PostsComponent } from './views/blog/posts/posts.component';
import { DepartamentosComponent } from './views/ocio/departamentos/departamentos.component';

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
