import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipes.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiBaseUrl = 'api/recipes';

  constructor(private http: HttpClient) { }

  getRecipes() {
    // return of (RECIPES);
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`);
  }

  getDetail(id:string): Observable<Recipe | undefined>{
    // const recipe = RECIPES.find( ricetta => ricetta._id === id);
    // return of(recipe);
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  insertRecipe(recipe: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, recipe);
  }
}
