import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OpenFoodService } from './openfood.service';

describe('OpenFoodService', () => {
  let service: OpenFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(OpenFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
