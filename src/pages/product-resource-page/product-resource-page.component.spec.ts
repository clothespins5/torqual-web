import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductResourcePageComponent } from './product-resource-page.component';

describe('ProductResourcePageComponent', () => {
  let component: ProductResourcePageComponent;
  let fixture: ComponentFixture<ProductResourcePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductResourcePageComponent]
    });
    fixture = TestBed.createComponent(ProductResourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
