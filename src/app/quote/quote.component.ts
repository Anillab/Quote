import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote(" KarlMax","Code more text less","Max"),
    new Quote("Igoni" ,"Money  does not create happiness but surely makes misery easier to live with","Anilla"),
    new Quote("Musk","Ideas are owned with Time","Kim"),
    new Quote("Obama","Change is what we believe in","Karanja"),

  ]
  addVote(i){
    alert(this.quotes[i].upVotes+=1)
  }
  subVote(i){
    alert(this.quotes[i].upVotes-1)
  }
  quoteDelete(index){
     alert("Do You want to Delete this Quote?")
      this.quotes.splice(index,1);
    }
  // deleteGoal(isDelete,index){
  //       if (isDelete){
  //           this.quotes.splice(index,1);
  //           }
  //           }
  constructor() { }
  //
  ngOnInit() {
  }
  }
