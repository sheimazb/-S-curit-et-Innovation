import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCNYMsjndgw-QW1nmfmzOKaGpIOP3B7t-o",
      authDomain: "pfeproject-60abd.firebaseapp.com",
      projectId: "pfeproject-60abd",
      storageBucket: "pfeproject-60abd.appspot.com",
      messagingSenderId: "537710037379",
      appId: "1:537710037379:web:84cdc205721c42f158ceb6"
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
