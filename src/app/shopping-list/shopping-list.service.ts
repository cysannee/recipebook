// import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients:Ingredient[]=[
        new Ingredient('carrots',5),
        new Ingredient('potato', 8),
        new Ingredient('onion', 2)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index:number) {
        return this.ingredients[index];
    }

    addNewIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients);
        // the above is shorthand for:
        // for (let ingredient of ingredients) {
        //  this.addNewIngredient(ingredient);
        // }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number, editedIngredient:Ingredient) {
        this.ingredients[index]=editedIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}