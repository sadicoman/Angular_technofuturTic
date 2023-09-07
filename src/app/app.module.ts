import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { SharedModule } from './shared/shared.module';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';
import { DemoDirectiveComponent } from './demo/demo-directive/demo-directive.component';
import { DemoDirective2Component } from './demo/demo-directive2/demo-directive2.component';
import { ArticleListComponent } from './exercices/article-list/article-list.component';
import { ParentComponentComponent } from './demo/demonInputOutput/parent-component/parent-component.component';
import { ChildComponentComponent } from './demo/demonInputOutput/child-component/child-component.component';
import { ChildComponent } from './demo/v-2/child/child.component';
import { ParentComponent } from './demo/v-2/parent/parent.component';
import { InputOuputExercicesComponent } from './exercices/InputOuput/input-ouput-exercices/input-ouput-exercices.component';
import { ParentExo1Component } from './exercices/InputOuput/ComposantDeBoutonCliquable/parent/parent.component';
import { ChildExo1Component } from './exercices/InputOuput/ComposantDeBoutonCliquable/child/child.component';
import { ParentExo2Component } from './exercices/InputOuput/ComposantDeCompteur/parent/parent.component';
import { ChildExo2Component } from './exercices/InputOuput/ComposantDeCompteur/child/child.component';
import { ChildExo3Component } from './exercices/InputOuput/ComposantDeFormulaireDeCommentaire/child/child.component';
import { ParentExo3Component } from './exercices/InputOuput/ComposantDeFormulaireDeCommentaire/parent/parent.component';
import { DemoServiceComponent } from './demo/demo-service/demo-service.component';
import { ProductListComponentComponent } from './exercices/product-list-component/product-list-component.component';
import { FormulaireComponent } from './demo/formulaire/formulaire.component';
import { UpdateProductComponent } from './exercices/update-product/update-product.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        Demo1Component,
        Exercice1Component,
        NavbarComponent,
        Demo2Component,
        Exercice2Component,
        DemoDirectiveComponent,
        DemoDirective2Component,
        ArticleListComponent,
        ChildComponentComponent,
        ParentComponentComponent,
        ChildComponent,
        ParentComponent,
        InputOuputExercicesComponent,
        ParentExo1Component,
        ChildExo1Component,
        ParentExo2Component,
        ChildExo2Component,
        ChildExo3Component,
        ParentExo3Component,
        DemoServiceComponent,
        ProductListComponentComponent,
        FormulaireComponent,
        UpdateProductComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
