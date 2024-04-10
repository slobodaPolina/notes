import {createAction, props} from '@ngrx/store';
import {Id} from '../models/card';

export const cardsActions = {
  like: createAction('[Card Component] Like', props<Id>()),
  dislike: createAction('[Card Component] Dislike', props<Id>()),
  delete: createAction('[Card Component] Delete', props<Id>())
};
