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
  public selected: any;

  ngOnInit(): void {
    this.openFoodService.getApiData().subscribe((data) => {
      this.foodList = data;
    });
  }

  filterEmptyValues() {
    return this.foodList.products.filter((x: any) => x.generic_name_it);
  }
  selectedValue(value: any) {
    console.log(value.$ngOptionLabel);
  }
  emptyOption() {
    this.selected = '';
  }
}
