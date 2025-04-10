import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySelectComponent } from './buy-select.component';

describe('BuySelectComponent', () => {
  let component: BuySelectComponent;
  let fixture: ComponentFixture<BuySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuySelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
