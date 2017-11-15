// import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // my solution didnt use the recipe model, so I manually added the type definition.
  // @Input() recipeItem:{name:string,description:string,imagePath:string};
  @Input() recipeItem:Recipe;
  @Input() recipeNum:number;

  // @Output() chosenRecipe = new EventEmitter<void>();

  ngOnInit() {
    // this.id=this.route.snapshot.params['id'];
  }

  // onSelect(selectedRecipe) {
  //   this.chosenRecipe.emit(selectedRecipe);
  //   console.log(this.chosenRecipe);
  // }

  // onSelect() {
    // this.recipeService.recipeSelected.emit(this.recipeItem);
  // }

}
