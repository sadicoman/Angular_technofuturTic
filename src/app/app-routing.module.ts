import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { DemoDirectiveComponent } from './demo/demo-directive/demo-directive.component';
import { DemoDirective2Component } from './demo/demo-directive2/demo-directive2.component';
import { ParentComponentComponent } from './demo/demonInputOutput/parent-component/parent-component.component';
import { ParentComponent } from './demo/v-2/parent/parent.component';
import { DemoServiceComponent } from './demo/demo-service/demo-service.component';
import { FormulaireComponent } from './demo/formulaire/formulaire.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';
import { ArticleListComponent } from './exercices/article-list/article-list.component';
import { InputOuputExercicesComponent } from './exercices/InputOuput/input-ouput-exercices/input-ouput-exercices.component';
import { ProductListComponentComponent } from './exercices/product-list-component/product-list-component.component';
import { UpdateProductComponent } from './exercices/update-product/update-product.component';
import { RoutingComponent } from './demo/routing/routing.component';
import { ConsoActivatedRouteComponent } from './demo/conso-activated-route/conso-activated-route.component';
import { GuardComponent } from './demo/guard/guard.component';
import { authGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // Démonstration
    { path: 'home', component: HomeComponent },
    { path: 'demo1', component: Demo1Component },
    { path: 'demo2', component: Demo2Component },
    { path: 'demo-directive', component: DemoDirectiveComponent },
    { path: 'demo-directive2', component: DemoDirective2Component },
    { path: 'demo-inpoutOutput-parent', component: ParentComponentComponent },
    { path: 'demo-inpoutOutput-v2', component: ParentComponent },
    { path: 'demo-service', component: DemoServiceComponent },
    { path: 'demo-formulaire', component: FormulaireComponent },
    // j'ajoute un paramètre (id) pour envoyé une information sur la route active
    { path: 'demo-routing', component: RoutingComponent },
    {
        path: 'conso-activated-route/:id',
        component: ConsoActivatedRouteComponent,
    },
    // Ajout d'un can activate dans le but de sécuriser l'accès au composant.
    { path: 'demo-guard', canActivate: [authGuard], component: GuardComponent },

    // Exercice
    { path: 'exercice1', component: Exercice1Component },
    { path: 'exercice2', component: Exercice2Component },
    { path: 'article-list', component: ArticleListComponent },
    { path: 'input-output-exercice', component: InputOuputExercicesComponent },
    { path: 'product-list', component: ProductListComponentComponent },
    { path: 'update-product', component: UpdateProductComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
