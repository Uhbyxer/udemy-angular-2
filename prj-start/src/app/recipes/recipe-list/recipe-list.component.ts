import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 'http://blog.pariscityvision.com/wp-content/uploads/2014/07/Burger-Paris.jpg'),
    new Recipe('A test Recipe', 'This is a test', 'http://blog.pariscityvision.com/wp-content/uploads/2014/07/Burger-Paris.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
