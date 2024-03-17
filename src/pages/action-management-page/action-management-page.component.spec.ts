import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionManagementPageComponent } from './action-management-page.component';

describe('ActionManagementPageComponent', () => {
  let component: ActionManagementPageComponent;
  let fixture: ComponentFixture<ActionManagementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActionManagementPageComponent]
    });
    fixture = TestBed.createComponent(ActionManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
