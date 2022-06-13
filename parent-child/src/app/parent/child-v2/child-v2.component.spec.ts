import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildV2Component } from './child-v2.component';

describe('ChildV2Component', () => {
  let component: ChildV2Component;
  let fixture: ComponentFixture<ChildV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
