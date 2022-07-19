import { Food } from './food';

export class CartItem {
  food!: Food;
  quantiy: number = 1;

  constructor(food: Food) {
    this.food = food;
  }

  get price(): number {
    return this.food.price * this.quantiy;
  }
}
