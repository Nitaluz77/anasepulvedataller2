import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitasConfigPage } from './citas-config.page';

describe('CitasConfigPage', () => {
  let component: CitasConfigPage;
  let fixture: ComponentFixture<CitasConfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
