import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent {
  private recipeService = inject(RecipeService);
  private router = inject(Router);

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    difficulty: new FormControl(0),
    published: new FormControl(false)
  })

  nuovaRicetta: any;
  percorsoDifficolta = "../../../../assets/images/difficolta-";

  constructor(private modalService: NgbModal) { }

  onSubmit(){
    // this.modalService.dismissAll();
    this.recipeService.insertRecipe(this.form.value).subscribe({
      next: res => {
        this.router.navigateByUrl('ricette')
      },
      error: (e) => console.log(e)
    })
  }

}
