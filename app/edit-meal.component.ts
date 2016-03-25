import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="container">
      <h3>Edit your meal</h3>
      <h4>Name: <input [(ngModel)]="meal.name"></h4><br>
      <h4>Details: <input [(ngModel)]="meal.details"></h4><br>
      <h4>Calories: <input [(ngModel)]="meal.calories"></h4>
      <h6>Were those fries really only 100 calories? No. No they were not.</h6>
      <h6>Fries are not low in calories. Stop lying to yourself.</h6>
  `
})

export class EditMealComponent{
  public meal: Meal;
}
