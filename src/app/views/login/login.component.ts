import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { IAppState } from 'src/app/store/store';
import { ReduxStoreActions } from 'src/app/store/actions';
import { NgRedux } from '@angular-redux/store';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

	public formModel: any = {};
	public user: any;
	public error: string = '';

	constructor(public appService: AppService, public router: Router, public db: AngularFirestore, public ngRedux: NgRedux<IAppState>){

	}

	ngOnInit() { }

	login(form){

		this.user = this.db.collection('users', ref => 
				ref.where('email', '==', form.value.email).limit(1))
				.snapshotChanges();
		this.user.subscribe((result) => {

			if(result[0].payload.doc.data().password === form.value.password){
				this.error = '';
				let user = {
					data: result[0].payload.doc.data(),
					docId: result[0].payload.doc.id
				};
				this.ngRedux.dispatch({type: ReduxStoreActions.Authenticated, body: { isAuthenticated: true}});
				this.appService.setUser(user);
				this.router.navigate(['/admin/dashboard']);
			} else {
				this.error = 'Invalid user credentials. Please try again.';
			}

		})

		// make request to Firebase DB with a WHERE caluse. searching for existing user email.
		// if user is found return the record and compare passwords of user to database
		// if match then set the app user in the serivce as shown above
		// navigate the user to previous route.
	}
}