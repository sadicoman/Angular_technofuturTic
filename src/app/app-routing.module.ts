import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';
import { DemoDirectiveComponent } from './demo/demo-directive/demo-directive.component';
import { DemoDirective2Component } from './demo/demo-directive2/demo-directive2.component';
import { ArticleListComponent } from './exercices/article-list/article-list.component';
import { ParentComponentComponent } from './demo/demonInputOutput/parent-component/parent-component.component';
import { ParentComponent } from './demo/v-2/parent/parent.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo-directive', component: DemoDirectiveComponent },
  { path: 'demo-directive2', component: DemoDirective2Component },
  { path: 'demo-inpoutOutput-parent', component: ParentComponentComponent },
  { path: 'demo-inpoutOutput-v2', component:ParentComponent},
  { path: 'exercice1', component: Exercice1Component },
  { path: 'exercice2', component: Exercice2Component },
  { path: 'article-list', component: ArticleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
