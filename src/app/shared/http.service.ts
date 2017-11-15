import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class HttpService {
    // constructor(Inject(Http), private http: Http) {}
    constructor(@Inject(Http) private http: Http,
                            private recipeService: RecipeService,
                            private authService: AuthService) {
    }

    saveDataToDatabase() {
        const token = this.authService.getToken();
        // console.log('HttpService || saveDataToDatabase() const token: '+ token);
        
        return this.http.put('https://recipebook-1ef58.firebaseio.com/data.json?auth=' + token, this.recipeService.getRecipes());
    }

    getData() {
        const token = this.authService.getToken();
        // console.log('HttpService || getData() const token: '+ token);
        
        return this.http.get('https://recipebook-1ef58.firebaseio.com/data.json?auth=' + token)
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        )
        // .map(
        //     (response: Response) => {
        //         return response.json();
        //     }
        // );
    }
}