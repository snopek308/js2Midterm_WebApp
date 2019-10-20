import { TestBed, inject } from '@angular/core/testing';

import { NewsletterComponent } from './newsletter.component';

describe('a newsletter component', () => {
	let component: NewsletterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NewsletterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NewsletterComponent], (NewsletterComponent) => {
		component = NewsletterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});