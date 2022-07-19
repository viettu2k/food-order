import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private fs: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.fs
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      } else if (params['tag']) {
        this.foods = this.fs.getAllFoodByTag(params['tag']);
      } else {
        this.foods = this.fs.getAll();
      }
    });
  }
}
