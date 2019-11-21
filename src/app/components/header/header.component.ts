// This is the typescript component page of the Header. When you set this up, you always 
// import any components you might need. Then you set up your @Component, by listing the metadata
//selector you are using, and the html and style sheet its attached to.

import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/store/store';
import { ReduxStoreActions } from 'src/app/store/actions';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

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
	@select((s: IAppState) => s.isAuthenticated) isAuthenticated;
	@select((s: IAppState) => s.user) user;

	constructor(public ngRedux: NgRedux<IAppState>, public router: Router, public route: ActivatedRoute, public appService: AppService){
		if(this.appService.getUser()){
			this.ngRedux.dispatch({type: ReduxStoreActions.StoreUser, body: { user: this.appService.getUser()}});
			this.ngRedux.dispatch({type: ReduxStoreActions.Authenticated, body: { isAuthenticated: true}});
		}
	}
	
	ngOnInit() {
		console.log('header comp init')
		console.log(this.isAuthenticated);
		console.log(this.user);
	 }

	toggleCart(){
		this.ngRedux.dispatch({type: ReduxStoreActions.ShowCart});
	}

	toggleNav(){
		document.querySelector('.main-container').classList.toggle('open-hamburger-menu');
	}

	logout(){
		localStorage.clear();
		this.ngRedux.dispatch({type: ReduxStoreActions.Authenticated, body: { isAuthenticated: false}});
		this.ngRedux.dispatch({type: ReduxStoreActions.RemoveUser});
		if(this.router.url === '/admin/dashboard'){
			this.router.navigate(['/']);
		}
	}

	loginPage(){
		this.router.navigate(['/login']);
	}
}