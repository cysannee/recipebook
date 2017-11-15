import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private ingredientSubscription: Subscription;

  // ingredients:Ingredient[]=[
  //   new Ingredient('carrots',5),
  //   new Ingredient('potato', 8),
  //   new Ingredient('onion', 2)
  // ];

  constructor(private shoppingListService:ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.ingredientSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  // onNewIngredientAdded(receivedIngredient:Ingredient) {
  //   this.ingredients.push(receivedIngredient);
  // }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }

}
