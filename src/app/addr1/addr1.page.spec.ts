import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addr1Page } from './addr1.page';

describe('Addr1Page', () => {
  let component: Addr1Page;
  let fixture: ComponentFixture<Addr1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addr1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addr1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
