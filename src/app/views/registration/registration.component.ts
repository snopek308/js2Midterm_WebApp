import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'registration',
	templateUrl: 'registration.component.html'
})

export class RegistrationComponent implements OnInit {

	//formModel for view
	public formModel: any = {};

	constructor(public db: AngularFirestore){
		
	}

	ngOnInit() { }

	submitForm(form: any){
		console.log(form);
		this.db.collection("/users").add(form.value).then(() => {
			this.resetForm(form);
		})
	}

	resetForm(f: any){
		f.reset()
	}
}