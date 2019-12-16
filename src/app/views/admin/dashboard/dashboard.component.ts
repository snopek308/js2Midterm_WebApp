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

//setting up the variables for the Dashboard page
export class DashboardComponent implements OnInit {

	likeTotal: number = 0;
	dislikeTotal: number = 0;
	badgeArray: any[] = [];
	dislikeBadgeArray: any[] = [];
	forumData: any[] = [];
	user:any;

	constructor(protected route: ActivatedRoute, public db: AngularFirestore, public appService: AppService){
		this.user = this.appService.getUser();
		this.getForumData();
		this.getForumDataWithImages();
	}

	ngOnInit() { }

	//function to subscribe to the changes happening on this page. Making a request to Firebase for data
	getForumData(){
		let data = this.db.collection("forums", ref => 
		ref.where('userDocID', '==', this.user.docId))
		.snapshotChanges();
		
		//subscribing to the result of the query to get actual data out of it
		data.subscribe((result: any) => {
			console.log(result);
			this.totalLikes(result);
			this.calculateBadgeCounts(result);
			this.forumData = result.map(item => {
				console.log(item.payload.doc.id)
				console.log(item.payload.doc.data())
				item.docId = item.payload.doc.id;
				return item;
			});
		})
	}

	//function to add up the total likes and the total dislikes on the comments
	totalLikes(data: any[]){
		data.forEach(item =>{
			this.likeTotal += item.payload.doc.data().likes;
			this.dislikeTotal += item.payload.doc.data().dislikes;
		});
	}

	//this function counts the total likes and dislikes to assign badges.
	calculateBadgeCounts(data: any[]){
		let totalLikeCount = 0;
		let totalDislikeCount = 0;
		data.forEach(item =>{
			console.log(item.payload.doc);
			totalLikeCount += item.payload.doc.data().likes;
			totalDislikeCount += item.payload.doc.data().dislikes;
			
		});
		console.log(totalLikeCount);
		let badgesTotal = Math.ceil(totalLikeCount/5)*5;
		console.log(badgesTotal);
		let badgesDislikeTotal = Math.ceil(totalDislikeCount/5)*5;
		this.addItemsToBadgeArray(badgesTotal, badgesDislikeTotal);
	}

	//create a function to add the items to the badge array, this way I can assign badges
	addItemsToBadgeArray(likeTotal: number, dislikeTotal: number){
		for(var i = likeTotal; i > 0; i--){
			if(i % 5){
			}
			else{
				this.badgeArray.push(i);
			}

		}

		for(var i = dislikeTotal; i > 0; i--){
			if(i % 5){
			}
			else{
				this.dislikeBadgeArray.push(i);
			}

		}
		console.log(this.badgeArray);
		console.log(this.dislikeBadgeArray);
	}


	getForumDataWithImages(){
	}
}