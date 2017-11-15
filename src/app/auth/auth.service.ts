import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()

export class AuthService {
    token:string;

    constructor(private router: Router) {}

    signupUser(email:string, password:string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            (error) => {console.log(error)}
        );
    }

    signinUser(email:string, password:string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
                this.router.navigate(['/recipes']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => {
                        this.token = token;
                        // console.log('AuthService || signinUser() this.token: '+this.token);
                });
                // this.getToken();
            }
        )
        .catch(
            (error) => {console.log(error);}
        );
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => {
                this.token = token;
                // console.log('AuthService || getToken() this.token: '+this.token);
        });
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
}