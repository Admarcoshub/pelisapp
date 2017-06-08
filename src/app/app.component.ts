import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AppService } from './servicios/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web App de Angular works!';
  pelis: any[];


constructor (private servicio: AppService) {

}

ngOnInit() {
	this.servicio.getPelis()
	.subscribe(pelis => this.pelis = pelis);
}

}
