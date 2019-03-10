import { TestBed } from '@angular/core/testing';

import { BuscadorService } from './store/buscador.service';

describe('BuscadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscadorService = TestBed.get(BuscadorService);
    expect(service).toBeTruthy();
  });
});
