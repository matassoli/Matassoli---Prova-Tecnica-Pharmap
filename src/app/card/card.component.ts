import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() selectedData: any = [];
  @Output() deletedItem = new EventEmitter<string>();

  dataCards: any[] = [];
  comparisonItem: number = 0;

  constructor() {}

  ngOnInit(): void {}

  // populate the cards after picking an option from the searchbar
  ngOnChanges(): void {
    if (this.selectedData.length != 0) {
      this.dataCards.push(this.selectedData);
    }
  }

  //  uses the index to select the primary card for the comparison
  selectPrimaryCard(idx: number) {
    this.comparisonItem = idx;
  }

  // deleting the card and outputting the delete value to reinsert the value on the select
  delete(idx: number) {
    this.deletedItem.emit(this.dataCards[idx]);
    this.dataCards.splice(idx, 1);
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
