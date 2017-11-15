// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../../shared/http.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// export class HeaderComponent implements OnInit {
export class HeaderComponent {
  // @Output() selectedFeature = new EventEmitter<string>();
  constructor(private httpService: HttpService,
              private authService: AuthService) { }

  // ngOnInit() {}

  // onSelect(feature:string) {
  //   this.selectedFeature.emit(feature);
  // }

  saveData() {
    this.httpService.saveDataToDatabase()
    .subscribe(
      (response: Response) => {console.log(response)},
      (error) => {console.log(error)},
    );
  }

  getData() {
    this.httpService.getData();
    // .subscribe(
    //   (response: Response) => {console.log(response)},
    //   (error) => {console.log(error)}
    // )
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
