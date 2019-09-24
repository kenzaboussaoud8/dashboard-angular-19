import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FirebaseAuthService } from '../providers/firebase-auth.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({ templateUrl: 'register.component.html' })

export class RegisterComponent {

  user = { login: "", password: "" };


  constructor(
    private firebaseAuth: FirebaseAuthService,
    public afAuth: AngularFireAuth, // Permet d'injecter le service d'authentification firebase

  ) { }
  submitForm() {
    this.firebaseAuth.SignUp(this.user.login, this.user.password)
  }
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        console.log('Vous êtes bien connecté !')
      }).catch((error) => {
        console.log(error)
      })
  }

}
