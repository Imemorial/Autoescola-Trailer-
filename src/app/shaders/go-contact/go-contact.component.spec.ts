import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoContactComponent } from './go-contact.component';

describe('GoContactComponent', () => {
  let component: GoContactComponent;
  let fixture: ComponentFixture<GoContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
