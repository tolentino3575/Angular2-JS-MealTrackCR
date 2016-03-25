import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="container">
      <h5>Edit</h5>
      <h5>Name: <input [(ngModel)]="meal.name"></h5>
      <h5>Details: <input [(ngModel)]="meal.details"></h5>
      <h5>Calories: <input [(ngModel)]="meal.calories"></h5>
  `
})

export class EditMealComponent{
  public meal: Meal;
}
