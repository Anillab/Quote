import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteOthersComponent } from './quote-others/quote-others.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteOthersComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
