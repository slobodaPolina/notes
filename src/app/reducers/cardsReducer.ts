import {createReducer, on} from '@ngrx/store';
import {cardsActions} from '../actions/card.actions';
import {Card, Id} from '../models/card';

const card1: Card = {
  title: 'Simple Title',
  text: 'A lot of simple text! Even more text!',
  id: 1,
  likes: 3,
  dislikes: 5
};

const card2: Card = {
  title: 'Simple Title 2',
  text: 'A lot of simple text! Even more text!',
  id: 2,
  likes: 1,
  dislikes: 52
};

const initialState = [card1, card2, card1, card1, card1, card1, card1, card1];

export const cardsReducer = createReducer(
  initialState,
  on(cardsActions.like, (cards, props: Id) => incrementProperty(cards, props.id, 'likes')),
  on(cardsActions.dislike, (cards, props: Id) => incrementProperty(cards, props.id, 'dislikes')),
  on(cardsActions.delete, (cards, props: Id) => deleteCard(cards, props.id))
);

const incrementProperty = (cards: Card[], id: number, incProperty: keyof Card) =>  {
  return cards.map(card => (
    card.id === id ?
      {
        ...card,
        [incProperty]:(card[incProperty] as number) + 1
      } :
      card
  ));
};

const deleteCard = (cards: Card[], id: number) =>  {
  return cards.filter(card => (card.id !== id));
};
