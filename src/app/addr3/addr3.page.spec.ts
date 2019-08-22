import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addr3Page } from './addr3.page';

describe('Addr3Page', () => {
  let component: Addr3Page;
  let fixture: ComponentFixture<Addr3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addr3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addr3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
