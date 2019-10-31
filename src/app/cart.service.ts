import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  //add,return,clear;
  addToCart(product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  constructor() {}

}