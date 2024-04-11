import {createReducer, on} from '@ngrx/store';
import {Card} from '../models/card';
import {cardsActions} from './card.actions';

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

const card3: Card = {
  title: 'Simple Title 3',
  text: 'A lot of simple text! Even more text!',
  id: 3,
  likes: 6,
  dislikes: 0
};

const initialState = [card1, card2, card3];

export const cardsReducer = createReducer(
  initialState,
  on(cardsActions.like, (cards, { id }) => incrementProperty(cards, id, 'likes')),
  on(cardsActions.dislike, (cards, { id }) => incrementProperty(cards, id, 'dislikes')),
  on(cardsActions.delete, (cards, { id }) => deleteCard(cards, id))
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
