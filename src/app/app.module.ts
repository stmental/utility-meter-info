import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import {AF} from "./providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

  // Initialize Firebase
  export const firebaseConfig = {
    apiKey: "AIzaSyCANpU3aW69Oo1HEN3yMhhV5bErQjr0uHI",
    authDomain: "utility-meter-info.firebaseapp.com",
    databaseURL: "https://utility-meter-info.firebaseio.com",
    storageBucket: "utility-meter-info.appspot.com",
    messagingSenderId: "987714541942"
  };

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
