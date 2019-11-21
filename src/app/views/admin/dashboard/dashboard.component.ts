import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from 'src/app/service/app.service';
import { combineLatest, pipe, of, defer } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {


	forumData: any[] = [];
	user:any;

	constructor(protected route: ActivatedRoute, public db: AngularFirestore, public appService: AppService){
		this.user = this.appService.getUser();
		this.getForumData();
		this.getForumDataWithImages();
	}

	ngOnInit() { }

	getForumData(){
		let data = this.db.collection("forums", ref => 
		ref.where('userDocID', '==', this.user.docId))
		.snapshotChanges();

		data.subscribe((result: any) => {
			console.log(result);
			this.forumData = result.map(item => {
				console.log(item.payload.doc.id)
				console.log(item.payload.doc.data())
				item.docId = item.payload.doc.id;
				return item;
			});
		})
	}

	getForumDataWithImages(){
				
		
	}
}