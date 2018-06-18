import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailPageComponent } from './productdetail-page.component';

describe('ProductdetailPageComponent', () => {
  let component: ProductdetailPageComponent;
  let fixture: ComponentFixture<ProductdetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
