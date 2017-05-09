import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
                 <nav class='navbar navbar-default'>
                     <div class='container-fluid'>
                         <a class='navbar-brand'>Fake NES Store</a>
                         <ul class='nav navbar-nav'>
                             <li><a [routerLink]="['/home']">Home</a></li>
                             <li><a [routerLink]="['/browse']">Browse</a></li>
                             <li><a [routerLink]="['/product']">Test Product Page</a></li>
                             <li><a [routerLink]="['/cart']">Cart</a></li>
                         </ul>
                     </div>
                 </nav>
                 <div class='container'>
                     <router-outlet></router-outlet>
                 </div>
                 <footer class='footer'>
                     <div class='container-fluid'>
                         <p class='text-muted'>Footer will go here</p>
                     </div>
                 </footer>
             </div>`
})
export class AppComponent  { name = 'Angular'; }
