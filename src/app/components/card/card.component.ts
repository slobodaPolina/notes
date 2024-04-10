import {Component} from '@angular/core';
import {Card} from '../../models/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card: Card = {
    title: 'Simple Title',
    text: 'A lot of simple text',
    id: 1,
    likes: 3,
    dislikes: 5
  };

}
