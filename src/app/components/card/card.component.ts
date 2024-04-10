import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {cardsActions} from '../../actions/card.actions';
import {Card} from '../../models/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card?: Card;

  constructor(private store: Store) {
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
