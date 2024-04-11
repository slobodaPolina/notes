import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../../store/app-state';
import {selectAllCardsIds} from '../../store/cards.selector';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  cardsIds$!: Observable<number[]>;

  constructor(private store: Store<AppState>) {
    this.cardsIds$ = this.store.select(selectAllCardsIds);
  }
}
