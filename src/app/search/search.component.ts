import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
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

  @Input() deletedItem: any = [];
  @Output() selectedData = new EventEmitter<string>();

  ngOnInit(): void {
    this.openFoodService.getApiData().subscribe((data) => {
      this.foodList = data;
    });
  }
  // reinserting the deleted value to the select after clicking on delete icon
  ngOnChanges(): void {
    this.foodList?.products?.push(this.deletedItem);
  }
  // filter to remove null values from the .json for consistency reasons
  filterEmptyValues() {
    return this.foodList?.products?.filter(
      (x: any) => x.abbreviated_product_name
    );
  }

  // recovering full products data from selected option, outputting it and removing it from the select
  selectedValue(value: any) {
    for (let i = 0; i < this.foodList.products.length; i++) {
      if (
        value.$ngOptionLabel ===
        this.foodList.products[i].abbreviated_product_name
      ) {
        this.selectedData.emit(this.foodList.products[i]);
        this.foodList.products.splice(i, 1);
      }
    }
  }

  // emptying search bar after clicking on it
  emptyOption() {
    this.selected = '';
  }
}
