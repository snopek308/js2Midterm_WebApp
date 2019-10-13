import { Component, OnInit } from '@angular/core';
import { DataRepositoryService } from 'src/app/service/data.service';

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
	public homeTitle: string = 'Home';
	// un-intialized variable
	//public homeTitle: string;

	public product: any;
	//public items: any[] = [1,2,3,4,5];
	public items: any[] = [
		// {name: 'test', value: 0 },
		// {name: 'rest', value: 1 },
		// {name: 'best', value: 2 }
	];

	// dependency injection (dpi) to user service based class
	constructor(public dataService: DataRepositoryService){

	}


	ngOnInit() { 
		this.getDisplayProducts();

	}

	getDisplayProducts(){
		// using service imported through dpi
		this.dataService.getRequest('/product').subscribe((result: any) => {
			//console.log(result);
			this.items = result;
		}, (error: any) => {
			console.log(error);
		});
	}
	
	productSelected(data: any){
		console.log('productSelected passed from child to view');
		console.log(data);
		this.product = data;
	}



}