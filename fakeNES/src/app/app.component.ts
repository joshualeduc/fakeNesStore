import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
                 <my-navbar></my-navbar>
                 <div class='container' style='padding-top: 70px'>
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
