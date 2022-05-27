import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComparisonComponent } from './product-comparison.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductComparisonComponent', () => {
  let component: ProductComparisonComponent;
  let fixture: ComponentFixture<ProductComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComparisonComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
