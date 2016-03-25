import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent} from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="page-header">
    <div class="jumbotron">
      <h1>wat u eat</h1>
    </div>
  </div>
  <div class="container">
    <meal-list
    [mealList]="meals"
    (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
    new Meal("Pizza", "So good", 500, 0),
    new Meal("Steak", "MMMMMMM", 700, 0),
    new Meal("Salad", "ew.", 25, 0),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
      console.log("p", clickedMeal);
  }
}
