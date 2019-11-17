import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from 'src/app/service/app.service';
import { format } from 'url';

@Component({
	selector: 'image',
	templateUrl: 'image.component.html'
})

export class ImageComponent implements OnInit {

	public imageId: any;
	public imageData: any;
	public forumData: any[] = [];
	public product: any;
	public user: any;
	public comment: string;

	constructor(protected route: ActivatedRoute, public db: AngularFirestore, public appService: AppService){
		this.route.params.subscribe(parms => {
			this.imageId = parms.id;
			this.getForumData(this.imageId);
			this.imageData = this.db.collection('products', ref => 
				ref.where('productID', '==', this.imageId).limit(1))
				.snapshotChanges();
			this.user = this.appService.getUser();
			console.log(this.user);
		})
	}

	ngOnInit() {
		console.log(this.imageData);
		this.imageData.subscribe((result: any) => {
			this.product = result[0].payload.doc.data();
		})
	}
	
	submitForum(f: any){
		console.log(f);
		console.log(this.user);

		let newDoc: any = {
			comments: f.value.comment,
			dislikes: 0,
			likes: 0,
			photoDocID: this.imageId,
			rating: 0,
			userDocID: this.user.docId
		}
		this.db.collection("forums").add(newDoc);
		console.log(newDoc);
		f.reset();
	}

	getForumData(id: any){
		let data = this.db.collection("forums", ref => 
		ref.where('photoDocID', '==', id))
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

	addLikeToForumComment(item: any){
		// add new like to previous count and update in database
		console.log(item);
	}

	addDislikeToForumComment(item: any){
		// add new dislike to prevous count and update in database.
		console.log(item);
	}

	setStarRating(rating: number, item: any){
		// calculate previous rating with new rating to determine average. update in database
		console.log(rating);
		console.log(item);
	}

}