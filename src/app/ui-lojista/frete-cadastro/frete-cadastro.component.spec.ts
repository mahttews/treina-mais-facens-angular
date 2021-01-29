import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteCadastroComponent } from './frete-cadastro.component';

describe('FreteCadastroComponent', () => {
  let component: FreteCadastroComponent;
  let fixture: ComponentFixture<FreteCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
