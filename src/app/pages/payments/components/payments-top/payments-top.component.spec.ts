import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsTopComponent } from './payments-top.component';

describe('PaymentsTopComponent', () => {
  let component: PaymentsTopComponent;
  let fixture: ComponentFixture<PaymentsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
