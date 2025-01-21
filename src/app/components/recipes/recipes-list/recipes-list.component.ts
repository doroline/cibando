import { Component, inject } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';
import { filter, first, map, Observable, take } from 'rxjs';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
  recipeService = inject(RecipeService);
  ricette: Recipe[] = [];
  titoloRicevuto: any;
  first: number = 0;
  rows: number = 10;
  page = 1;
  size = 4;


  recipes$ = this.recipeService.getRecipes().pipe(
    map(response => response.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 3)),
    map(res => this.totaleRicette = res)
  )
  totaleRicette: Recipe[];

  constructor(){
    // this.getRecipes();
  }

  getRecipes(){
    this.recipeService.getRecipes().pipe(first()).subscribe({
      next: (res) => {
        console.log(res); // Controlla il formato delle date qui
        this.ricette = res.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        // this.ricette = res.sort((a, b) => b.createdAt - a.createdAt);
      },
      error: (e) => console.error(e)
    })
  }

  onPageChange(event) {
    event.page = event.page + 1;
    this.page = event.page;
    this.size = event.rows;
  }

  riceviTitolo(event: any){
    this.titoloRicevuto = event;
  }


}
