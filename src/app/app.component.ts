import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[]
  constructor(){
    this.quotes=["code more","text less",
    "Money  doesn not create happiness but surely makes misery easier to live with",
    "Ideas are owned with Time"

    ];
  }
}
