import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteOthersComponent } from './quote-others.component';

describe('QuoteOthersComponent', () => {
  let component: QuoteOthersComponent;
  let fixture: ComponentFixture<QuoteOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
