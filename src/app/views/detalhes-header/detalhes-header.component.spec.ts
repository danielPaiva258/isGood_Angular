import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesHeaderComponent } from './detalhes-header.component';

describe('DetalhesHeaderComponent', () => {
  let component: DetalhesHeaderComponent;
  let fixture: ComponentFixture<DetalhesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
