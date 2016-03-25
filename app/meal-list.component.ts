import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  pipes: [CaloriesPipe],
  template: `
    <h4>View your healthy vs unhealthy meals</h4>
    <select (change)="onChangeCalories($event.target.value)">
      <option value="All" selected="selected">Show all meals</option>
      <option value="Healthy">Show healthy meals</option>
      <option value="Unhealthy">Show unhealthy meals</option>
    </select>

    <meal-display *ngFor="#currentMeal of mealList | calories:filterCal"
    (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
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
