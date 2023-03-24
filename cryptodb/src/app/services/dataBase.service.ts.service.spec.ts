/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataBase.service.tsService } from './dataBase.service.ts.service';

describe('Service: DataBase.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBase.service.tsService]
    });
  });

  it('should ...', inject([DataBase.service.tsService], (service: DataBase.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
