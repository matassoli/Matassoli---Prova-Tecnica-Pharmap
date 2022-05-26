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

  constructor() {}

  ngOnInit(): void {}

  // populate the cards after picking an option from the searchbar
  ngOnChanges(): void {
    if (this.selectedData.length != 0) {
      this.dataCards.push(this.selectedData);
    }
  }

  star(idx: number) {}

  // deleting the card and outputting the delete value to reinsert the value on the select
  delete(idx: number) {
    this.deletedItem.emit(this.dataCards[idx]);
    this.dataCards.splice(idx, 1);
  }
}
