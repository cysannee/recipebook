// import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode=false;
  editItemIndex:number;
  editItem: Ingredient;
  @ViewChild('form') listForm: NgForm;
  // @ViewChild('nameInput') ingredientName:ElementRef;
  // @ViewChild('amountInput') ingredientAmount:ElementRef;

  // @Output() newIngredient= new EventEmitter<Ingredient>();
  
  // newIngredientName:string;
  // newIngredientAmount:number;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredient(this.editItemIndex);
        this.listForm.setValue({
          itemName: this.editItem.name,
          itemAmount: this.editItem.amount
        })
      }
    );
  }

  onAdd(form: NgForm) {
    // const ingName = this.ingredientName.nativeElement.value;
    // const ingAmount = this.ingredientAmount.nativeElement.value;
    // console.log(form);
    const newIngredient = new Ingredient(form.value.itemName, form.value.itemAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListService.addNewIngredient(newIngredient);
    }
    this.editMode = false;
    this.listForm.reset();

    // this.newIngredient.emit({
    //   name:this.ingredientName.nativeElement.value,
    //   amount:this.ingredientAmount.nativeElement.value
    // });
    
    // this.newIngredientName=this.ingredientName.nativeElement.value;
    // this.newIngredientAmount=this.ingredientAmount.nativeElement.value;
    // console.log(this.newIngredientName, this.newIngredientAmount);
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  onClear() {
    this.listForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
