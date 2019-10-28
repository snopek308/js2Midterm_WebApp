// This is the typescript component page of the Header. When you set this up, you always 
// import any components you might need. Then you set up your @Component, by listing the metadata
//selector you are using, and the html and style sheet its attached to.

import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';
import { ReduxStoreActions } from 'src/app/store/actions';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['./header.component.scss']
})

//cartQty is the reference to the cartQty array in the Redux Store
//Redux allows for easier passing between parent and children. Instead of passing up and down 
//huge chains of parents and children, Redux is more circular.
export class HeaderComponent implements OnInit {
	@select((s: IAppState) => s.totalCartQty) cartQty;
	constructor(public ngRedux: NgRedux<IAppState>){

	}
	
	ngOnInit() { }

	toggleCart(){
		this.ngRedux.dispatch({type: ReduxStoreActions.ShowCart});
	}
}