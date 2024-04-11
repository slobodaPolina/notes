import {createSelector} from '@ngrx/store';
import {AppState} from './app-state';

export const selectAllCards = (state: AppState) => state.allCards;

export const selectAllCardsIds =
  createSelector(selectAllCards, allCards => Array.from(allCards.keys())); // todo actually I would like to drag-n-drop them

export const selectCard = (id?: number) =>
  createSelector(selectAllCards, allCards => id ? allCards.get(id) : undefined);
