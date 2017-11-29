import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FriendlistComponent } from './friendlist/friendlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FriendlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
