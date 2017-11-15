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
            'Prawn and lemongrass soup',
            'It’s one of the most subtle and delicious aromatics. Use it in soup, and save some for pudding, too.',
            'https://gdurl.com/bIhf',
            [
                new Ingredient('prawns',16),
                new Ingredient('shallots',5),
                new Ingredient('carrots',4),
                new Ingredient('lemongrass stalks',3)
            
            ]
        ),
        new Recipe(
            'Savoury gruyere and pumpkin pie',
            'While some of the pumpkins currently spilling out of greengrocers’ displays are destined to become jack-o’-lanterns, the best are made for mashing. Try this savoury gruyere pie or speedy chilli-spiked soup',
            'https://gdurl.com/G_iN',
            [
                new Ingredient('pumpkin',1),
                new Ingredient('onion',1),
                new Ingredient('eggs',2),
                new Ingredient('gruyere',1),
            ]
        ),
        new Recipe(
            'Squid and chorizo, almond picada',
            'Nuts bring a lot to the table. Use them toasted in salads, to bolster a cake or to add texture and flavour to seafood.',
            'https://gdurl.com/1P17',
            [
                new Ingredient('squid',1),
                new Ingredient('chorizo',2),
                new Ingredient('plum tomatoes',5),
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