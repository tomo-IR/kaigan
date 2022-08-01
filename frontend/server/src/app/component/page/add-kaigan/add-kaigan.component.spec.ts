import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKaiganComponent } from './add-kaigan.component';

describe('AddKaiganComponent', () => {
  let component: AddKaiganComponent;
  let fixture: ComponentFixture<AddKaiganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKaiganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKaiganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
