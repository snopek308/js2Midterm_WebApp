// This is the typescript component page of the Footer. When you set this up, you always 
// import any components you might need. Then you set up your @Component, by listing the metadata
//selector you are using, and the html and style sheet its attached to.

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: 'footer.component.html',
	styleUrls: ["footer.component.scss"]
})

export class FooterComponent implements OnInit {

	ngOnInit() { }
}