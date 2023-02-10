import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoComponentComponent } from './avaliacao-component.component';

describe('AvaliacaoComponentComponent', () => {
  let component: AvaliacaoComponentComponent;
  let fixture: ComponentFixture<AvaliacaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
