import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote-others',
  templateUrl: './quote-others.component.html',
  styleUrls: ['./quote-others.component.css']
})
export class QuoteOthersComponent implements OnInit {

  @Input() quote:Quote;
  // @Output() isDelete= new EventEmitter<boolean>();
  quoteDelete(i){
      this.quotes.splice(i,1);
    }



  constructor() { }


  ngOnInit() {
  }


    // deleteQuote(i){
    //     if ( confirm("Are you sure you want to delete the quote?")){
    //         this.quotes.splice(i,1)
    //     })
}
