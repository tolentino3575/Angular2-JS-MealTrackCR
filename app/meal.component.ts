import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="container">
      <dl>
        <dt>{{ meal.name }}</dt>
        <dd>Details: {{ meal.details }}</dd>
        <dd>Calories: {{ meal.calories }}</dd>
      </dl>
    </div>
  `
})
 export class MealComponent{
   public meal: Meal;
 }
