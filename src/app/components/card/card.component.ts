import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Card} from '../../models/card';
import {AppState} from '../../store/app-state';
import {cardsActions} from '../../store/card.actions';
import {selectCard} from '../../store/cards.selector';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() cardId?: number;

  card$?: Observable<Card | undefined>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.card$ = this.store.select(selectCard(this.cardId));
  }

  like(card: Card) {
    this.store.dispatch(cardsActions.like(card));
  }

  dislike(card: Card) {
    this.store.dispatch(cardsActions.dislike(card));
  }

  delete(card: Card) {
    this.store.dispatch(cardsActions.delete(card));
  }
}
