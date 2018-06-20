import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeModalComponent } from './prime-modal.component';

describe('PrimeModalComponent', () => {
  let component: PrimeModalComponent;
  let fixture: ComponentFixture<PrimeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
