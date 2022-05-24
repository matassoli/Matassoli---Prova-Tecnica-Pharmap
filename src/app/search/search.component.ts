import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OpenFoodService } from '../services/openfood.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  constructor(private openFoodService: OpenFoodService) {}

  public foodList: any;
  public selected = '';
  public selectedData: any;

  ngOnInit(): void {
    this.openFoodService.getApiData().subscribe((data) => {
      this.foodList = data;
      console.log(this.foodList);
    });
  }

  // filter to remove null values from the select
  filterEmptyValues() {
    return this.foodList.products.filter(
      (x: any) => x.abbreviated_product_name
    );
  }

  // recovering full products data from selected option
  selectedValue(value: any) {
    for (let i = 0; i < this.foodList.products.length; i++) {
      if (value.$ngOptionLabel === this.foodList.products[i].abbreviated_product_name) {
        this.selectedData = this.foodList.products[i];
        // console.log(this.selectedData.nutriments);
        break;
      }
    }
  }

  // emptying search bar after clicking on it
  emptyOption() {
    this.selected = '';
  }
}
