import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation.component'
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

import { GameService } from './browse/game.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'browse', component: BrowseComponent },
            { path: 'product', component: ProductComponent },
            { path: 'cart', component: CartComponent }
        ])],
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        BrowseComponent,
        ProductComponent,
        CartComponent
    ],
    providers: [
        GameService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
