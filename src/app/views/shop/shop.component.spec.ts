import { TestBed, inject } from '@angular/core/testing';

import { ShopComponent } from './shop.component';

describe('a shop component', () => {
	let component: ShopComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ShopComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ShopComponent], (ShopComponent) => {
		component = ShopComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});