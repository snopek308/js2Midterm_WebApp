import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

	public formModel: any = {};

	constructor(public appService: AppService, public router: Router){

	}

	ngOnInit() { }

	login(form){
		// fake way
		this.appService.setUser(form.value);
		this.router.navigate(['/admin/dashboard']);

		// make request to Firebase DB with a WHERE caluse. searching for existing user email.
		// if user is found return the record and compare passwords of user to database
		// if match then set the app user in the serivce as shown above
		// navigate the user to previous route.
	}
}