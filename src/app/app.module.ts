import {NgModule} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {BrowserModule} from '@angular/platform-browser';
import {provideStore, StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardListComponent} from './components/card-list/card-list.component';
import {CardComponent} from './components/card/card.component';
import {cardsReducer} from './reducers/cardsReducer';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButton,
    MatIconModule,
    StoreModule.forRoot({ cards: cardsReducer })
  ],
  providers: [
    //provideStore({ card: cardReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
