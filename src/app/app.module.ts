import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteOthersComponent } from './quote-others/quote-others.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteOthersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
