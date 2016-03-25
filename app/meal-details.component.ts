import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
      <h4>Details: {{ meal.details }}</h4>
    <div [class.unhealthy]="meal.calories > 300">
      <h4>Calories: {{ meal.calories }}</h4>
    </div>
  `
})

export class MealDetailsComponent {
  public meal: Meal;
}
