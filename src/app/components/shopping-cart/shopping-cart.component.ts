import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';
import { ReduxStoreActions } from 'src/app/store/actions';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: 'shopping-cart.component.html',
	styleUrls: ['shopping-cart.component.scss']
})

//
export class ShoppingCartComponent implements OnInit {

	@select((s: IAppState) => s.showCart) showCart;
	@select((s: IAppState) => s.cart) cartItems;

	constructor(public ngRedux: NgRedux<IAppState>){}

	ngOnInit() { }

	//here is the function for clearingcart(). Once again, dispatching this 
	//information to the state to change it.
	clearCart(){
		this.ngRedux.dispatch({type: ReduxStoreActions.ClearCart});
	}
}