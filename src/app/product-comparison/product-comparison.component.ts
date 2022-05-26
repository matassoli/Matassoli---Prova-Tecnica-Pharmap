import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OpenFoodService } from '../services/openfood.service';

@Component({
  selector: 'app-product-comparison',
  templateUrl: './product-comparison.component.html',
  styleUrls: ['./product-comparison.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductComparisonComponent implements OnInit {
  constructor(private openFoodService: OpenFoodService) {}

  foodList: any = [];
  dataCards: any = [];
  selected = '';
  primaryItem: number = 0;

  ngOnInit(): void {
    this.openFoodService.getApiData().subscribe((data) => {
      this.foodList = data;
    });
  }
  // filter to remove null values from the .json for consistency reasons
  filterEmptyValues() {
    return this.foodList?.products?.filter((x: any) => x.abbreviated_product_name);
  }
  // recovering full products data from selected option, outputting it and removing it from the select
  selectedProduct(value: any) {
    for (let i = 0; i < this.foodList.products.length; i++) {
      if (value.$ngOptionLabel === this.foodList.products[i].abbreviated_product_name) {
        this.dataCards.push(this.foodList.products[i]);
        this.foodList.products.splice(i, 1);
      }
    }
  }
  // emptying search bar after clicking on it
  emptyOption() {
    this.selected = '';
  }
  //  uses the index to select the primary card for the comparison
  selectPrimaryCard(idx: number) {
    this.primaryItem = idx;
  }
  // clears all the active cards
  clearAll() {
    this.dataCards.forEach((product: any) => this.foodList.products.push(product));
    this.dataCards = [];
    this.foodList.products.sort((a: any, b: any) => a.id - b.id);
  }
  // deleting the card and outputting the delete value to reinsert the value on the select
  delete(idx: number) {
    this.foodList.products.push(this.dataCards[idx]);
    this.dataCards.splice(idx, 1);
    this.foodList.products.sort((a: any, b: any) => a.id - b.id);
  }
  // comparing the primary card with the secondary and assiging the icon
  trendingIcon(primary: any, secondary: any) {
    if (primary > secondary) {
      return 'trending_down';
    } else if (primary < secondary) {
      return 'trending_up';
    } else if (primary === secondary) {
      return 'trending_flat';
    }
    return;
  }
}
