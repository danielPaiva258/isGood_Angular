import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEmpresasComponent } from './detalhes-empresas.component';

describe('DetalhesEmpresasComponent', () => {
  let component: DetalhesEmpresasComponent;
  let fixture: ComponentFixture<DetalhesEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
