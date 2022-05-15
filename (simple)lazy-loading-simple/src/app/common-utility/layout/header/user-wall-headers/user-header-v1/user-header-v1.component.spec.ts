import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeaderV1Component } from './user-header-v1.component';

describe('UserHeaderV1Component', () => {
  let component: UserHeaderV1Component;
  let fixture: ComponentFixture<UserHeaderV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeaderV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeaderV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
