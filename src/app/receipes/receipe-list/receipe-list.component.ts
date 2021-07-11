import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [
    new Receipe('A Test Receipe', 'This is test 1.', 'https://c.pxhere.com/photos/c8/ea/appetizer_bowl_delicious_dish_epicure_food_fries_guacamole-1557385.jpg!d'),
    new Receipe('A 2nd Test Receipe', 'This is test 2.', 'https://c.pxhere.com/photos/33/0f/meat_vegetables_gemuesepiess_mushrooms_meat_skewer_barbecue_summer_benefit_from-610407.jpg!d')



  ];

  constructor() { }

  ngOnInit(): void {
  }

}
