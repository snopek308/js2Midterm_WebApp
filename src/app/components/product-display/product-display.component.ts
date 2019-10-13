import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
	selector: 'app-product-display',
	templateUrl: 'product-display.component.html',
	styleUrls: ['./product-display.component.scss']
})

export class ProductDisplayComponent implements OnInit, OnChanges {

	public productList: any[] = [];

	@Input() products: any[];
	@Output() productSelected: EventEmitter<any> = new EventEmitter();

	ngOnInit() { }

	ngOnChanges(){
		this.productList = this.products;
		console.log('=== ngOnChanges from ProductDisplayComponent ===');
		console.log(this.products);
	}

	selectedProduct(item: any){
		console.log(item);
		console.log('item to be passed to parent');
		this.productSelected.emit(item)

	}
}