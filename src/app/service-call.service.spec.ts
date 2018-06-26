import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServiceCallService } from './service-call.service';

describe('ServiceCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ServiceCallService]
    });
  });

  it('should be created', inject([ServiceCallService], (service: ServiceCallService) => {
    expect(service).toBeTruthy();
  }));
});
