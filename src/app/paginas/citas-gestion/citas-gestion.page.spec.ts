import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitasGestionPage } from './citas-gestion.page';

describe('CitasGestionPage', () => {
  let component: CitasGestionPage;
  let fixture: ComponentFixture<CitasGestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasGestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
