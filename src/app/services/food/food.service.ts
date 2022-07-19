import { Tag } from './../../shared/models/tag';
import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 8 },
      { name: 'Pizza', count: 3 },
      { name: 'Lunch', count: 2 },
      { name: 'Soup', count: 5 },
      { name: 'Fry', count: 3 },
      { name: 'Dinner', count: 1 },
    ];
  }

  getAllFoodByTag(tag: string): Food[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 2,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'china'],
        star: 5.0,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 3,
        name: 'Pizza',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Pizza', 'Fry'],
      },
      {
        id: 4,
        name: 'Pizza',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 3.5,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry', 'Lunch'],
      },
      {
        id: 5,
        name: 'Pizza',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food-5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 6,
        name: 'Pizza',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Dinner'],
      },
      {
        id: 7,
        name: 'Bruh',
        price: 10,
        cookTime: '15-30',
        favorite: true,
        origins: ['VN'],
        star: 4,
        imageUrl: 'assets/food-7.jpg',
        tags: ['SlowFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Bruh',
        price: 10,
        cookTime: '15-30',
        favorite: true,
        origins: ['VN'],
        star: 4.5,
        imageUrl: 'assets/food-8.jpg',
        tags: ['SlowFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
