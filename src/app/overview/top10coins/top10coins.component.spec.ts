import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10coinsComponent } from './top10coins.component';

describe('Top10coinsComponent', () => {
  let component: Top10coinsComponent;
  let fixture: ComponentFixture<Top10coinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top10coinsComponent]
    });
    fixture = TestBed.createComponent(Top10coinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
