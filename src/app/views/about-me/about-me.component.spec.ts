import { TestBed, inject } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';

describe('a about-me component', () => {
	let component: AboutMeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AboutMeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AboutMeComponent], (AboutMeComponent) => {
		component = AboutMeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});