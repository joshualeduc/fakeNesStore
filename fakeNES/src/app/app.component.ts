import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
                 <nav class='navbar navbar-default'>
                     <div class='container-fluid'>
                         <a class='navbar-brand'>Fake NES Store</a>
                         <ul class='nav navbar-nav'>
                             <li><a>Home</a></li>
                         </ul>
                     </div>
                 </nav>
                 <div class='container'>
                     <home></home>
                 </div>
                 <footer>
                     Footer will go here
                 </footer>
             </div>`,
})
export class AppComponent  { name = 'Angular'; }
