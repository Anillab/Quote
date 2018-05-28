import { Component } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes=[
    new Quote('KarlMax','Code more text less','Max',new Date(2017,0,18)),
    new Quote("Igoni","Money  does not create happiness but surely makes misery easier to live with","Anilla",new Date(1997,8,30)),
    new Quote("Musk","Ideas are owned with Time","Kim",new Date(2016,7,12)),
    new Quote("Obama","Change is what we believe in","Karanja",new Date(2015,6,17)),

  ]
  constructor(){

  }
}
