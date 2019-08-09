import { Component, OnInit, Input } from '@angular/core';

import { Subscription } from 'rxjs';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { MainService } from '../../services/main.service';

declare const window: any;




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input()
  value;

  test = 'start';
  main_nav_scroll = true;
  myColorVaraible = '';
  myColor = 'white';
  menu_bgc = '';
  cart_count = 0;
  total = 0;
  cartSubscription: Subscription;
  cartTotalSubscription: Subscription;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    
   if(localStorage.getItem('total')){
     this.total = parseInt(localStorage.getItem('total'));
   }
       if(JSON.parse(localStorage.getItem('added_items'))){
      this.cart_count = JSON.parse(localStorage.getItem('added_items')).length;
    }else {
      this.cart_count = 0;
    }
     this.cartSubscription = this.mainService.getCartSub().subscribe(
       (data) => {
        this.cart_count = data;
       })

       this.cartTotalSubscription = this.mainService.getTotalSub()
       .subscribe(data => {
         //console.log(data);
         this.total = data;
       })

    
  }

   @HostListener("window:scroll", []) 
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 580 && this.value == 1) {
      this.myColorVaraible = 'white';
      this.myColor = 'black';
      this.menu_bgc = 'white';
    }else if(number > 400 && this.value == 2){
      this.myColorVaraible = 'white';
      this.myColor = 'black';
      this.menu_bgc = 'white';
    }else if(number > 263 && this.value == 3){
      this.myColorVaraible = 'white';
      this.myColor = 'black';
      this.menu_bgc = 'white';
    }else if(number > 317 && this.value == 4){
      this.myColorVaraible = 'white';
      this.myColor = 'black';
      this.menu_bgc = 'white';
    }else if(number > 300 && this.value == 5){
      this.myColorVaraible = 'white';
      this.myColor = 'black';
      this.menu_bgc = 'white';
    }
    else {
      this.myColorVaraible = ''; 
      this.myColor = 'white';
      this.menu_bgc = '';
    }
  }



}