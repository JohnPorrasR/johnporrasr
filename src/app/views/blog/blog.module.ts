// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Componentes
import { ArticulosComponent } from '../blog/articulos/articulos.component';
import { PostsComponent } from '../blog/posts/posts.component';

import { BlogRoutingModule } from '../blog/blog-routing.module';

@NgModule({
    declarations: [
        ArticulosComponent,
        PostsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        BlogRoutingModule
    ],
    exports: [
        ArticulosComponent,
        PostsComponent
    ],
    providers: []
})

export class BlogModule {}
