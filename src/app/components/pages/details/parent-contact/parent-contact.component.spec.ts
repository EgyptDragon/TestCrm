import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContactComponent } from './parent-contact.component';

describe('ParentContactComponent', () => {
  let component: ParentContactComponent;
  let fixture: ComponentFixture<ParentContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
