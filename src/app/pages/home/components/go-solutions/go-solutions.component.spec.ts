import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoSolutionsComponent } from './go-solutions.component';

describe('GoSolutionsComponent', () => {
  let component: GoSolutionsComponent;
  let fixture: ComponentFixture<GoSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
