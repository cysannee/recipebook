import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipe.model';
// import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // recipeToDisplay:Recipe;

  // constructor(private recipeService:RecipeService) { }
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe:Recipe) => {
    //     this.recipeToDisplay=recipe;
    //   }
    // );
  }

  // onDisplayRecipe(chosenRecipe:Recipe) {
  //   this.recipeToDisplay=chosenRecipe;
  // }

  // onRecipeSelected(selectedRecipe:Recipe) {
  //   this.recipeToDisplay=selectedRecipe;
  //   console.log('RecipeComponent recipeToDisplay: '+this.recipeToDisplay.name);
  // }

}
