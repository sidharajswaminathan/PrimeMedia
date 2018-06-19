import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggingslideComponent } from './draggingslide.component';

describe('DraggingslideComponent', () => {
  let component: DraggingslideComponent;
  let fixture: ComponentFixture<DraggingslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggingslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggingslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
