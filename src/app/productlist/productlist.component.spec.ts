import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridViewComponent } from '../grid-view/grid-view.component';
import { ProductlistComponent } from './productlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DraggingslideComponent } from '../draggingslide/draggingslide.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxCarouselModule } from 'ngx-carousel';

describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot(), HttpClientTestingModule, RouterTestingModule, NgxCarouselModule],
      declarations: [ ProductlistComponent, GridViewComponent, DraggingslideComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
