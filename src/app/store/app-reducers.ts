import {AppReducers} from './app-state';
import {cardsReducer} from './cards.reducer';

export const forRootReducers: AppReducers = {
  allCards: cardsReducer
};
