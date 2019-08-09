
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShopComponent } from './components/shop/shop.component';
import { FoodsComponent } from './components/foods/foods.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from '@agm/core';

import { MainService } from './services/main.service';
import { CartComponent } from './components/cart/cart.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'shop', component: ShopComponent,
  children: [
    {path: '', component: FoodsComponent},
    {path: ':id', component: FoodsComponent}
  ]},
  {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ReservationComponent,
    MenuComponent,
    ShopComponent,
    FoodsComponent,
    ContactComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDktOU89k0KVMdPe51SaJvN57ddhEbcaBU'
    })
  ],
  providers: [MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
