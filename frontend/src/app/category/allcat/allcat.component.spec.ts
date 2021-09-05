import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcatComponent } from './allcat.component';

describe('AllcatComponent', () => {
  let component: AllcatComponent;
  let fixture: ComponentFixture<AllcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
