import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule,  NgbCollapseModule  } from '@ng-bootstrap/ng-bootstrap';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
//componenti
import { CarouselComponent } from './components/shared/carousel/carousel.component';
//pagine
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RecipeCardComponent } from './components/shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { NewRecipeComponent } from './components/recipes/new-recipe/new-recipe.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeCardComponent,
    DetailComponent,
    RecipesListComponent,
    RegistrationComponent,
    NewRecipeComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    PasswordModule,
    DividerModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
