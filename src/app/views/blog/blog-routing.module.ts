import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticulosComponent } from '../blog/articulos/articulos.component';
import { PostsComponent } from '../blog/posts/posts.component';

const blogRoutes: Routes = [
    {
        path: 'blog',
        component: ArticulosComponent,
        children: [
            { path: '/:val', component: PostsComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(blogRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BlogRoutingModule {}
