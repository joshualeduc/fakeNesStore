﻿import { Component } from '@angular/core';

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
            imageUrl: 'img/super_mario_bros_cover.jpg',
            quantity: 1
        }
    ]
}