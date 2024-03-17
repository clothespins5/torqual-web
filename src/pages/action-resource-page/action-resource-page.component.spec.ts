import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionResourcePageComponent } from './action-resource-page.component';

describe('ActionResourcePageComponent', () => {
  let component: ActionResourcePageComponent;
  let fixture: ComponentFixture<ActionResourcePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActionResourcePageComponent]
    });
    fixture = TestBed.createComponent(ActionResourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
