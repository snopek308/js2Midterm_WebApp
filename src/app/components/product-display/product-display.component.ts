// This is the typescript component page of the Header. When you set this up, you always 
// import any components you might need. Then you set up your @Component, by listing the metadata
//selector you are using, and the html and style sheet its attached to.

import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { Lightbox } from 'ngx-lightbox';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';
import { ReduxStoreActions } from 'src/app/store/actions';

@Component({
	selector: 'app-product-display',
	templateUrl: 'product-display.component.html',
	styleUrls: ['./product-display.component.scss']
})


export class ProductDisplayComponent implements OnInit, OnChanges {

	public productList: any[] = [];

	@Input() products: any[];
	@Output() productSelected: EventEmitter<any> = new EventEmitter();

	//this is the constructor for lightbox. Lightbox is the widget I found to make my pictures expand in my Home View.
	constructor(private _lightbox: Lightbox, public ngRedux: NgRedux<IAppState>){}

	ngOnInit() { }

	//this function is used to be a defined callback function on each element of an array, and returns an array that contains the results
	ngOnChanges(){
		this.productList = this.products.map(i =>{
			i.src = './' + i.productPhoto;
			i.caption = i.productDescription;
			return i;
		})
		console.log('=== ngOnChanges from ProductDisplayComponent ===');
		console.log(this.products);
	}

	selectedProduct(item: any){
		console.log(item);
		console.log('item to be passed to parent');
		this.productSelected.emit(item)

	}

	productAction(event: any, item: product, type: string){
		let selection = {
			event: event, 
			item: item,
			type: type
		};
		this.productSelected.emit(selection);
	}

	openLightbox(item: product, index: number){
		this._lightbox.open(this.productList, index);
	}

	addProductToCart(item: product){
		this.ngRedux.dispatch({type: ReduxStoreActions.AddToCart, product: item});
	}
}