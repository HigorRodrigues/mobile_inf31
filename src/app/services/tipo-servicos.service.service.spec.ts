import { TestBed } from '@angular/core/testing';

import { TipoServicosServiceService } from './tipo-servicos.service.service';

describe('TipoServicosServiceService', () => {
  let service: TipoServicosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoServicosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
