import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AleatorioComponent } from './aleatorio.component';

describe('AleatorioComponent', () => {
  let component: AleatorioComponent;
  let fixture: ComponentFixture<AleatorioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AleatorioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
