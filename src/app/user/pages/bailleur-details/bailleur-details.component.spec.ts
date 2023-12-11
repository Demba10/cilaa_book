import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailleurDetailsComponent } from './bailleur-details.component';

describe('BailleurDetailsComponent', () => {
  let component: BailleurDetailsComponent;
  let fixture: ComponentFixture<BailleurDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BailleurDetailsComponent]
    });
    fixture = TestBed.createComponent(BailleurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
