import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildV1Component } from './child-v1.component';

describe('ChildV1Component', () => {
  let component: ChildV1Component;
  let fixture: ComponentFixture<ChildV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
