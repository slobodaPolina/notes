import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Card} from '../../models/card';
import {AppState} from '../../store/app-state';
import {selectAllCards} from '../../store/cards.selector';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  cards$!: Observable<Card[]>;

  constructor(private store: Store<AppState>) {
    this.cards$ = this.store.select(selectAllCards);
  }
}
