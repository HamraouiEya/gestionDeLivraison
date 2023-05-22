import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBanDeLivraisonComponent } from './gestion-ban-de-livraison.component';

describe('GestionBanDeLivraisonComponent', () => {
  let component: GestionBanDeLivraisonComponent;
  let fixture: ComponentFixture<GestionBanDeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionBanDeLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionBanDeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
