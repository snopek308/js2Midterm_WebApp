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

	//default class constructor, the firebase connection and the parameter of the route to get the info out.
	//pulling the imageID from the Angular Route Param, which is used to make a request to get the product
	//details.
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

	//this is setting up listening for the changes to the database
	ngOnInit() {
		console.log(this.imageData);
		this.imageData.subscribe((result: any) => {
			this.product = result[0].payload.doc.data();
		})
	}
	
	//this function is setting up how to push a new doc to the database
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

	//this function is setting up 
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

	//adding likes to the count in the database
	addLikeToForumComment(item: any){
		// add new like to previous count and update in database
		console.log(item);
		this.db.collection('forums').doc(item.docId).update({likes: item.payload.doc.data().likes +=1});
			this.getForumData(this.imageId);
	}

	//adding dislikes to the count in the database
	addDislikeToForumComment(item: any){
		// add new dislike to prevous count and update in database.
		console.log(item);
		let dislikes = item.payload.doc.data().dislikes;
		this.db.collection('forums').doc(item.docId).update({dislikes: dislikes +=1});
		this.getForumData(this.imageId);
	}
	

	setStarRating(rating: number, item: any){
		// calculate previous rating with new rating to determine average. update in database
		
		console.log(rating);
		console.log(item);
		this.db.collection('forums').doc(item.docId).update({rating: rating});
		this.getForumData(this.imageId);
	}

}