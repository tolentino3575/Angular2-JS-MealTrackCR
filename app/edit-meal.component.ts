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
      <h6>Were those fries really only 100 calories? No. No they were not.</h6>
      <h6>Fries are not low in calories. Don't lie to yourself. You're better than that.</h6>
  `
})

export class EditMealComponent{
  public meal: Meal;
}
