import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiquesComponent } from './politiques.component';

describe('PolitiquesComponent', () => {
  let component: PolitiquesComponent;
  let fixture: ComponentFixture<PolitiquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiquesComponent]
    });
    fixture = TestBed.createComponent(PolitiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
