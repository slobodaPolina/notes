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

const initialState: Map<number, Card> = new Map([[1, card1], [2, card2], [3, card3]]);

export const cardsReducer = createReducer(
  initialState,
  on(cardsActions.like, (cards, { id }) => incrementProperty(cards, id, 'likes')),
  on(cardsActions.dislike, (cards, { id }) => incrementProperty(cards, id, 'dislikes')),
  on(cardsActions.delete, (cards, { id }) => deleteCard(cards, id))
);

const incrementProperty = (cards: Map<number, Card>, id: number, incProperty: keyof Card) =>  {
  const card = cards.get(id);
  if(!card) {
    return cards;
  }

  const copy = new Map(cards);
  copy.set(id, {
    ...card,
    [incProperty]: (card[incProperty] as number) + 1
  });
  return copy;
};

const deleteCard = (cards: Map<number, Card>, id: number) =>  {
  const copy = new Map(cards);
  copy.delete(id);
  return copy;
};
