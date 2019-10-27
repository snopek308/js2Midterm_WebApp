import { Component, OnInit } from '@angular/core';
import { DataRepositoryService } from 'src/app/service/data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

	// public xx: string;
	// public xy: boolean;
	// public xz: number;
	// public zz: any; -> Object
	// public zzz: any[];

	// initialized variable
	public openDropdown: boolean = false;
	public items: any[] = [];
	public product: any;
	public products: Observable<any[]>;

	// dependency injection (dpi) to user service based class
	constructor(public db: AngularFirestore) {

	}


	ngOnInit() { 
		this.getDisplayProducts();
	}

	getDisplayProducts(){
		this.products = this.db.collection('/products').valueChanges();
		this.products.subscribe((result: any) => {
			console.log(result);
			this.items = result.map(item => {
				item.cartQty = 0;
				return item;
			});
		}, (error: any) => {
			console.log(error);
		});
	}

	productSelected(data: any){
		console.log(data);
		// if(data.type === "views"){
		// 	this.db.collection('/products').doc(data.item.productID).update({
		// 		"views": data.item.views += 1
		// 	}).then(() => {
		// 		this.getDisplayProducts();
		// 	})

		// }else{
		// 	this.db.collection('/products').doc(data.item.productID).update({
		// 		"likes": data.item.likes += 1
		// 	}).then(() => {
		// 		this.getDisplayProducts();
		// 	})

		// }

	}

	getProductFromExternalDB(){
	// // using service imported through dbi
		// this.dataService.getRequest('/product').subscribe((result: any) => {
		// 	//console.log(result);
		// 	this.items = result;
		// }, (error: any) => {
		// 	console.log(error);
		// });
	}

	sendFilterQuery(type: any){
		this.toggleFilterBtn();
		switch(type){
			case 0:
				this.products = this.db.collection('products', ref => ref.orderBy('productName', 'asc')).valueChanges();
				this.applyProductsToList(this.products);
				break;
			case 1:
				this.products = this.db.collection('products', ref => ref.orderBy('productName', 'desc')).valueChanges();
				this.applyProductsToList(this.products);
				break;
			case 2:
				this.products = this.db.collection('products', ref => ref.orderBy('likes', 'desc')).valueChanges();
				this.applyProductsToList(this.products);
				break;
			case 3:
				this.products = this.db.collection('products', ref => ref.orderBy('views', 'desc')).valueChanges();
				this.applyProductsToList(this.products);
				break;
		}
	}

	applyProductsToList(products: Observable<any>){
		products.subscribe((result: any) => {
			console.log(result);
			this.items = result;
		}, (error: any) => {
			console.log(error);
		});
	}
	
	toggleFilterBtn(){
		this.openDropdown = !this.openDropdown;
	}



}