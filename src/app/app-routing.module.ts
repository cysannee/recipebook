import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    // {path: '', redirectTo:'/recipes', pathMatch: 'full'}
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule'}
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}