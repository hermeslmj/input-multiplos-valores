import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBootstrapComponent } from './input-bootstrap.component';

describe('InputBootstrapComponent', () => {
  let component: InputBootstrapComponent;
  let fixture: ComponentFixture<InputBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
