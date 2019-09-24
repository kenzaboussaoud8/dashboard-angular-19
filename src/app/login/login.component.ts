import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FirebaseAuthService } from '../providers/firebase-auth.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({ templateUrl: 'login.component.html' })

export class LoginComponent {

  user = { login: "", password: "" };


  constructor(
    private firebaseAuth: FirebaseAuthService,
    public afAuth: AngularFireAuth, // Permet d'injecter le service d'authentification firebase
    private router: Router

  ) { }
  login() {
    console.log("Zoubida")
    this.afAuth.auth.signInWithEmailAndPassword(this.user.login, this.user.password).then(() => this.router.navigate(['home'])
    ).catch(() => this.router.navigate(['login']))
  }


}
