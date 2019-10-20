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
			this.items = result;
		}, (error: any) => {
			console.log(error);
		});
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
	
	productSelected(data: any){
		console.log('productSelected passed from child to view');
		console.log(data);
		this.product = data;
	}



}