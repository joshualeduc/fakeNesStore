import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'browse', component: BrowseComponent },
            { path: 'product', component: ProductComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ])],
    declarations: [
        AppComponent,
        HomeComponent,
        BrowseComponent,
        ProductComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
