import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteListagemComponent } from './frete-listagem.component';

describe('FreteListagemComponent', () => {
  let component: FreteListagemComponent;
  let fixture: ComponentFixture<FreteListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreteListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
