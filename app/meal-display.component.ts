import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
        <h2>{{ meal.name }}</h2>
  `
})
 export class MealDisplayComponent{
   public meal: Meal;
 }
