import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { materiasResolver } from './materias.resolver';

describe('materiasResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => materiasResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
