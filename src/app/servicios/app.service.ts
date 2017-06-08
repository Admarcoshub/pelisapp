import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'


@Injectable()
export class AppService {
	pelis: FirebaseListObservable<any>;

  constructor(private af: AngularFireDatabase) { }

  getPelis() {
  	this.pelis = this.af.list('/') as FirebaseListObservable<any>;
  	return this.pelis;
  }

}
