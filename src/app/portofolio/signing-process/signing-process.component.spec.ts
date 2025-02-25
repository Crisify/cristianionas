import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningProcessComponent } from './signing-process.component';

describe('SigningProcessComponent', () => {
  let component: SigningProcessComponent;
  let fixture: ComponentFixture<SigningProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigningProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigningProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
