import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDirectorySyncComponent } from './one-directory-sync.component';

describe('OneDirectorySyncComponent', () => {
  let component: OneDirectorySyncComponent;
  let fixture: ComponentFixture<OneDirectorySyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDirectorySyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDirectorySyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
