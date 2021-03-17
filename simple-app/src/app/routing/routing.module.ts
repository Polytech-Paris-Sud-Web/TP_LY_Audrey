import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ArticleComponent } from '../article/article.component';
import { ArticlesComponent } from '../articles/articles.component';
import { ArticleCreationComponent } from '../article-creation/article-creation.component';

const appRoutes: Routes = [
	{ path: 'create', component: ArticleCreationComponent },
	{ path:'articles', component:ArticlesComponent },
 	{ path:'article/:id', //:type is dynamic here
 	    component: ArticleComponent      
 	},
	{ path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path:'**', redirectTo : '/articles'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
   exports: [
    RouterModule
  ],
})
export class RoutingModule { }
