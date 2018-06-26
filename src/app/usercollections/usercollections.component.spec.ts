import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsercollectionsComponent } from './usercollections.component';

describe('UsercollectionsComponent', () => {
  let component: UsercollectionsComponent;
  let fixture: ComponentFixture<UsercollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      declarations: [ UsercollectionsComponent, BreadcrumbComponent, CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
