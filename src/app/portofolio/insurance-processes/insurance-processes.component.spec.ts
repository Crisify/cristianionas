import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceProcessesComponent } from './insurance-processes.component';

describe('InsuranceProcessesComponent', () => {
  let component: InsuranceProcessesComponent;
  let fixture: ComponentFixture<InsuranceProcessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceProcessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
