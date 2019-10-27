import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: 'shopping-cart.component.html',
	styleUrls: ['shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {

	@select((s: IAppState) => s.showCart) showCart;
	@select((s: IAppState) => s.cart) cartItems;
	ngOnInit() { }
}