import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart_data = []; 
  emptyCart: boolean;

  get total(){
     let sum = 0;
     if(this.cart_data != null){
             for(let i of this.cart_data){
         sum = sum +(i.price as number * i.quantity as number);
     }
     }
     
     //console.log(sum);
     return sum;
  }
  constructor(private mainService: MainService) { }

  ngOnInit() {
   this.cart_data = JSON.parse(localStorage.getItem('added_items'));
   if(this.cart_data.length == 0){
     this.emptyCart = true;
   }else{
     this.emptyCart = false;
   }
  }

  chnageQuan(a,b) {
    for(let i = 0;i < this.cart_data.length;i++){
      if(a.id == this.cart_data[i].id){
        this.cart_data[i].quantity = b.target.value;
        //console.log(this.cart_data);
        localStorage.setItem('added_items', JSON.stringify(this.cart_data));
        //console.log(this.total);
        localStorage.setItem('total', this.total.toString());
        this.mainService.setTotal(this.total);

    
             }
    }
  }
  delet(item){
    const item_id = this.cart_data.indexOf(item);
    console.log(item_id);
    if(item_id != -1){
      this.cart_data.splice(item_id,1);
    }
  localStorage.setItem('added_items', JSON.stringify(this.cart_data));
  localStorage.setItem('total', this.total.toString());
  this.mainService.setTotal(this.total);
  console.log(this.cart_data);
  if(this.cart_data.length == 0){
    this.emptyCart = true;
  }
  }

  updateCart(){
       
  }

}