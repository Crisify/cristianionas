import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorySyncComponent } from './directory-sync.component';

describe('DirectorySyncComponent', () => {
  let component: DirectorySyncComponent;
  let fixture: ComponentFixture<DirectorySyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorySyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorySyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
