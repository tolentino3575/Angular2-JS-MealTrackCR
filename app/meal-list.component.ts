import { Component, EventEmitter } from 'angular2/core';
import { MealDisplayComponent } from './meal-display.component';
import { MealDetailsComponent } from './meal-details.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealDisplayComponent, NewMealComponent, EditMealComponent, MealDetailsComponent],
  pipes: [CaloriesPipe],
  template: `
    <h4>Healthy v Unhealthy</h4>
    <select (change)="onChangeCalories($event.target.value)">
      <option value="All" selected="selected">Show all meals</option>
      <option value="Healthy">Show healthy meals</option>
      <option value="Unhealthy">Show unhealthy meals</option>
    </select>
    <div class="row">
      <div class="col-md-4" *ngFor="#currentMeal of mealList | calories:filterHealthy">
        <meal-display (click)="mealClicked(currentMeal)"
          [class.selected]="currentMeal === selectedMeal"
          [meal]="currentMeal">
        </meal-display>
        <meal-details *ngIf="currentMeal === selectedMeal" [meal]="currentMeal"></meal-details>
        <edit-meal *ngIf="currentMeal === selectedMeal" [meal]="selectedMeal"></edit-meal>
      </div>
    </div>

    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>

  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "All";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log("c", clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: any[]): void{
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], newMeal[2], this.mealList.length)
    );
  }
  onChangeCalories(filterCal){
    this.filterHealthy = filterCal;
  }
}
