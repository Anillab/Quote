import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote-others',
  templateUrl: './quote-others.component.html',
  styleUrls: ['./quote-others.component.css']
})
export class QuoteOthersComponent implements OnInit {
  @Input() quote:Quote;


  constructor() { }

  ngOnInit() {
  }

}
