import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MainService {
  cartSub = new Subject<number>();
  cartTotal = new Subject<number>();
  cart_count: number;
  constructor() { }

  getCartSub(){
    return this.cartSub.asObservable();
  }

  getTotalSub() {
    return this.cartTotal.asObservable();
  }

  addCount(){
     if(JSON.parse(localStorage.getItem('added_items'))){
      this.cart_count = JSON.parse(localStorage.getItem('added_items')).length;
      this.cartSub.next(this.cart_count);
    }else {
      this.cart_count = 0;
      this.cartSub.next(this.cart_count);
    }
  }

  setTotal(total){
    this.cartTotal.next(total);
  }

}