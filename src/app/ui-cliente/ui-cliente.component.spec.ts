import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiClienteComponent } from './ui-cliente.component';

describe('UiClienteComponent', () => {
  let component: UiClienteComponent;
  let fixture: ComponentFixture<UiClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
