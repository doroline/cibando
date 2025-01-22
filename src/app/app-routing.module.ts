
import { ProfileComponent } from './components/user/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './logged-in.guard';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { NewRecipeComponent } from './components/recipes/new-recipe/new-recipe.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'ricette', component: RecipesComponent, children: [
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path: 'dettaglio/:_id', component: DetailComponent},
    {path: 'nuova-ricetta', component: NewRecipeComponent},
    {path: '', component: RecipesListComponent, pathMatch: 'full'}
  ]},
  {path: 'registrazione', component: RegistrationComponent},
  {path: 'profilo', component: ProfileComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
