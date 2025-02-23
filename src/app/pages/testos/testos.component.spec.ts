import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestosComponent } from './testos.component';

describe('TestosComponent', () => {
  let component: TestosComponent;
  let fixture: ComponentFixture<TestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
