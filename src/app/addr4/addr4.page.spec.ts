import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addr4Page } from './addr4.page';

describe('Addr4Page', () => {
  let component: Addr4Page;
  let fixture: ComponentFixture<Addr4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addr4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addr4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
