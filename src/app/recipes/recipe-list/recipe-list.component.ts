import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is test 1.', 'https://c.pxhere.com/photos/c8/ea/appetizer_bowl_delicious_dish_epicure_food_fries_guacamole-1557385.jpg!d'),
    new Recipe('A 2nd Test Recipe', 'This is test 2.', 'https://c.pxhere.com/photos/33/0f/meat_vegetables_gemuesepiess_mushrooms_meat_skewer_barbecue_summer_benefit_from-610407.jpg!d')



  ];

  constructor() { }

  ngOnInit(): void {
  }

}
