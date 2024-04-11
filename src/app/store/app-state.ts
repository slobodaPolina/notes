import {ActionReducer} from '@ngrx/store';
import {Card} from '../models/card';

export interface AppState {
  allCards: Map<number, Card>;
}

// the type to track reducers config matches the AppState
export type AppReducers = {
  [key in keyof AppState]: ActionReducer<AppState[key]>
};
