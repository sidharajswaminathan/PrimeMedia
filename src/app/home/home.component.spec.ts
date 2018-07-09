import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { ServiceCallService } from '../service-call.service';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ HomeComponent ],
      providers: [ServiceCallService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be Number success', () => {

    // inject([HttpTestingController], (httpMock: HttpTestingController, serviceCall: ServiceCallService) => {
    //   console.log("here")
    //   serviceCall.getConfig('medialibv2.productcategories').subscribe((event: HttpEvent<any>) => {
    //     console.log(HttpEventType.Response, 'dada');
    //   } );
    //   httpMock.verify();
    //
    // } );
  });
});
