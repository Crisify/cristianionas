import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerCloudComponent } from './broker-cloud.component';

describe('BrokerCloudComponent', () => {
  let component: BrokerCloudComponent;
  let fixture: ComponentFixture<BrokerCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
