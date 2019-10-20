import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { Lightbox } from 'ngx-lightbox';

@Component({
	selector: 'app-product-display',
	templateUrl: 'product-display.component.html',
	styleUrls: ['./product-display.component.scss']
})

export class ProductDisplayComponent implements OnInit, OnChanges {

	public productList: any[] = [];

	@Input() products: any[];
	@Output() productSelected: EventEmitter<any> = new EventEmitter();

	constructor(private _lightbox: Lightbox){}

	ngOnInit() { }

	ngOnChanges(){
		this.productList = this.products.map(i =>{
			i.src = i.productPhoto;
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
}