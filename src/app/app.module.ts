import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';

import { AppService } from './servicios/app.service';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs'

export const firebaseConfig = {
	apiKey: "AIzaSyDY5yPG_0q-MgGNxNTcRkiqUQ_VQjhkt8k",
    authDomain: "pelis-c9a91.firebaseapp.com",
    databaseURL: "https://pelis-c9a91.firebaseio.com",
    projectId: "pelis-c9a91",
    storageBucket: "pelis-c9a91.appspot.com",
    messagingSenderId: "289693707071"
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
  AppService,
  AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
