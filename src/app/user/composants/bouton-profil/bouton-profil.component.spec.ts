import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonProfilComponent } from './bouton-profil.component';

describe('BoutonProfilComponent', () => {
  let component: BoutonProfilComponent;
  let fixture: ComponentFixture<BoutonProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoutonProfilComponent]
    });
    fixture = TestBed.createComponent(BoutonProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
