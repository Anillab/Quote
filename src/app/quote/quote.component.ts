import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote(" KarlMax","Code more text less","Max",new Date(2017,0,18)),
    new Quote("Igoni" ,"Money  does not create happiness but surely makes misery easier to live with","Anilla",new Date(1997,8,30)),
    new Quote("Musk","Ideas are owned with Time","Kim",new Date(2016,7,12)),
    new Quote("Obama","Change is what we believe in","Karanja",new Date(2015,6,17)),

  ]
  addVote(i){
    this.quotes[i].upVotes+=1;

  }
  subVote(i){
    this.quotes[i].downVotes+=1;
  }
  quoteDelete(index){
     confirm("Do You want to Delete this Quote?")
      this.quotes.splice(index,1);
    }

    addNewQuote(quote){
      let quoteLength=this.quotes.length;
          quote.id=quoteLength++;
          quote. postedTime= new Date(quote.postedTime)
          this.quotes.push(quote)

   }

  constructor() { }

  ngOnInit() {
  }
  }
