import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFooterV1Component } from './user-footer-v1.component';

describe('UserFooterV1Component', () => {
  let component: UserFooterV1Component;
  let fixture: ComponentFixture<UserFooterV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFooterV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFooterV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
