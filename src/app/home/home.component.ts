import { Component, OnInit } from '@angular/core';
import { OpenFoodService } from '../services/openfood.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private openFoodService: OpenFoodService) {}

  public foodList: any;

  ngOnInit(): void {
    this.openFoodService.getApiData().subscribe((data) => {
      this.foodList = data;
      console.log(this.foodList);
    });
  }

  forData() {
    return this.foodList.products.filter((x: any) => x.generic_name_it);
  }
}
