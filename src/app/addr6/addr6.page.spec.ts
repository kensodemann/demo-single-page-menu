import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addr6Page } from './addr6.page';

describe('Addr6Page', () => {
  let component: Addr6Page;
  let fixture: ComponentFixture<Addr6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addr6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addr6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
