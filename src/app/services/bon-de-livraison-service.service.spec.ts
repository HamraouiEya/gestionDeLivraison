import { TestBed } from '@angular/core/testing';

import { BonDeLivraisonServiceService } from './bon-de-livraison-service.service';

describe('BonDeLivraisonServiceService', () => {
  let service: BonDeLivraisonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonDeLivraisonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
