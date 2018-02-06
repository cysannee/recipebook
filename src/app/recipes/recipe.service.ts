// import { EventEmitter, Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    // recipeSelected= new EventEmitter<Recipe>();
    recipesChanged = new Subject<Recipe[]>();
    
    private recipes:Recipe[] = [
        new Recipe(
            'Fried Rice',
            'Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat.',
            'https://gdurl.com/T7zB',
            [
                new Ingredient('rice',1),
                new Ingredient('eggs',2),
                new Ingredient('shrimps',1),
                new Ingredient('carrots',2)
            
            ]
        ),
        new Recipe(
            'Omelette',
            'In cuisine, an omelette or omelet is a dish made from beaten eggs fried with butter or oil in a frying pan (without stirring as in scrambled egg). It is quite common for the omelette to be folded around a filling such as cheese, chives, vegetables, mushrooms, meat (often ham or bacon), or some combination of the above.',
            'https://gdurl.com/CPzI',
            [
                new Ingredient('eggs',3),
                new Ingredient('onion',1),
                new Ingredient('bacon',3),
                new Ingredient('chives',1),
            ]
        ),
        new Recipe(
            'Spaghetti Bolognese',
            'Spaghetti bolognese (sometimes called spaghetti alla bolognese, or colloquially spag bol or just spaghetti) is a pasta dish consisting of spaghetti served with a sauce made from tomatoes, minced beef, garlic, wine and herbs; sometimes minced beef can be replaced by other minced meats.',
            'https://gdurl.com/BIyY',
            [
                new Ingredient('spaghetti',1),
                new Ingredient('tomatoes',3),
                new Ingredient('mince meat',1),
                new Ingredient('garlic cloves',2),
            ]
        ),
    ];

    constructor(private shoppingListService:ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipeWithId(index:number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
