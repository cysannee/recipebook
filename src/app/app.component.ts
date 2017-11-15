import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // featureDisplayed:string='recipe';
  
  // onFeatureSelected(feature:string) {
  //   this.featureDisplayed=feature;
  // }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD32asp-I1GbOLVY0kHy0PwfZiZFixfsm8",
      authDomain: "recipebook-1ef58.firebaseapp.com"
    });
  }
  
}
