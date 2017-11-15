// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy {
  recipes:Recipe[];
  subscription: Subscription;

  // @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes=this.recipeService.getRecipes();
  }

  // onRecipeChosen(receivedRecipe:Recipe) {
  //   this.selectedRecipe.emit(receivedRecipe);
  //   // this.selectedRecipe=receivedRecipe;
  //   // console.log('onRecipeChosen: '+this.selectedRecipe.name);
  //   // console.log('onRecipeChosen: '+this.selectedRecipe);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
