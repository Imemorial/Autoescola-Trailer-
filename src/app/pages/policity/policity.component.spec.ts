import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicityComponent } from './policity.component';

describe('PolicityComponent', () => {
  let component: PolicityComponent;
  let fixture: ComponentFixture<PolicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
