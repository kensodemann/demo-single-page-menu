import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addr5Page } from './addr5.page';

describe('Addr5Page', () => {
  let component: Addr5Page;
  let fixture: ComponentFixture<Addr5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addr5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addr5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
