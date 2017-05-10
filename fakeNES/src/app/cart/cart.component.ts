import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/cart/cart.component.html'
})
export class CartComponent {
    products = [
        {
            title: 'Super Mario Brothers',
            price: 14.99,
            rating: 4,
            description: 'a;lsdkjfa;lsdkjfpwoeriulsldsjf;laskdjf;lasdfjk alk;dkjfpowqeijf sadf wpjoeir sdl kfsla;djf poqowi efjsad fja dpfwioefj sad;lkfj asdgpwoeifjas dlf',
            imageUrl: 'app/assets/images/super_mario_bros_cover.jpg',
            quantity: 1,
            itemTotal: function (): number {
                return this.quantity * this.price;
            }

        }
    ];

    subTotal = function (): number {
        let sum: number = 0;
        for (let product of this.products) {
            sum += product.itemTotal();
        }
        return +sum.toFixed(2);
    }

    estimatedShipping = function (): number {
        let sum: number = 0;
        for (let product of this.products) {
            sum += product.quantity;
        }
        return +((Math.ceil(sum / 3)*1.75).toFixed(2));
    }

    total = function (): number {
        return +((this.subTotal() + this.estimatedShipping()).toFixed(2));
    }
    ;
}