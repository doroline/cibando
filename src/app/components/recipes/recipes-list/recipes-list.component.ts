import { Component } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';

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
  ricette: Recipe[] = [];
  titoloRicevuto: any;
  first: number = 0;
  rows: number = 10;
  page = 1;
  size = 4;

  constructor(private recipeService: RecipeService){
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
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
