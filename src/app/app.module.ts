import { ShoppingEditComponent } from './pages/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { RecipeItemComponent } from './pages/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
