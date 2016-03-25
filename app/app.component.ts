import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template: `
    <h3 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)">
      {{ currentMeal.name }}
    </h3>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log("c", clickedMeal);
    this.onMealSelect.emit(clickedMeal);
  }
}

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="page-header">
    <h1>wat u eat</h1>
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
