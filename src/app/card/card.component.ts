import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() selectedData: any = [];
  dataCards: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log();
    if (this.selectedData.length != 0) {
      this.dataCards.push(this.selectedData);
    }
    // console.log('selectedData', this.selectedData);
    console.log(this.dataCards);
  }
}
