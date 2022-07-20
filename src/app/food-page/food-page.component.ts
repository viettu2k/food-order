import { CartService } from './../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/models/food';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(parseInt(params['id']));
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
