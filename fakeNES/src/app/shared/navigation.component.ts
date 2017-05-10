import { Component } from '@angular/core';

@Component({
    selector: 'my-navbar',
    templateUrl: 'app/shared/navigation.component.html',
    styleUrls: ['app/shared/navigation.component.css']
})
export class NavigationComponent {
    products = [
        {
            title: 'Super Mario Brothers',
            price: 14.99,
            rating: 4,
            description: 'a;lsdkjfa;lsdkjfpwoeriulsldsjf;laskdjf;lasdfjk alk;dkjfpowqeijf sadf wpjoeir sdl kfsla;djf poqowi efjsad fja dpfwioefj sad;lkfj asdgpwoeifjas dlf',
            imageUrl: 'app/assets/images/super_mario_bros_cover.jpg',
            quantity: 1,
            orderCashTotal: function (): number {
                return this.quantity * this.price;
            }
        }
    ];

    totalItems = function (): number {
        let sum: number = 0;
        for (let product of this.products) {
            return sum += product.quantity;
        }
        return sum;
    }


}