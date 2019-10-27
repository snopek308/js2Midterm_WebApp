import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';
import { ReduxStoreActions } from 'src/app/store/actions';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	@select((s: IAppState) => s.totalCartQty) cartQty;
	constructor(public ngRedux: NgRedux<IAppState>){

	}
	
	ngOnInit() { }

	toggleCart(){
		this.ngRedux.dispatch({type: ReduxStoreActions.ShowCart});
	}
}