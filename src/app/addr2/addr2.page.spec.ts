import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addr2Page } from './addr2.page';

describe('Addr2Page', () => {
  let component: Addr2Page;
  let fixture: ComponentFixture<Addr2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addr2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addr2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
