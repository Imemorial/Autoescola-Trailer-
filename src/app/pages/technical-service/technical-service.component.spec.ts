import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalServiceComponent } from './technical-service.component';

describe('TechnicalServiceComponent', () => {
  let component: TechnicalServiceComponent;
  let fixture: ComponentFixture<TechnicalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
