import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Peperoni',
        price: 10,
        tags: [],
        favorite: false,
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        origins: ['Italy'],
        cooktime: '10-20',
      },
      {
        id: 2,
        name: 'Meetball',
        price: 20,
        tags: [],
        favorite: false,
        stars: 4.5,
        imageUrl: '/assets/images/food-2.jpg',
        origins: ['China'],
        cooktime: '20-50',
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        tags: [],
        favorite: false,
        stars: 4.5,
        imageUrl: '/assets/images/food-3.jpg',
        origins: ['France'],
        cooktime: '10-15',
      },
      {
        id: 4,
        name:'French fries',
        price: 2,
        tags: [],
        favorite: false,
        stars: 3,
        imageUrl: '/assets/images/food-4.jpg',
        origins: ['France'],
        cooktime: '15-20',
      },
      {
        id: 5,
        name:'chicken soup',
        price: 11,
        tags: [],
        favorite: false,
        stars: 3,
        imageUrl: '/assets/images/food-5.jpg',
        origins: ['India'],
        cooktime: '40-50',
      },
      {
        id: 6,
        name:'Vegetarian Pizza',
        price: 9,
        tags: [],
        favorite: false,
        stars: 4,
        imageUrl: '/assets/images/food-6.jpg',
        origins: ['Italy'],
        cooktime: '40-50',
      }
    ]
  }
}
