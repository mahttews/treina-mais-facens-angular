import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLojistaComponent } from './ui-lojista.component';

describe('UiLojistaComponent', () => {
  let component: UiLojistaComponent;
  let fixture: ComponentFixture<UiLojistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLojistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLojistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
