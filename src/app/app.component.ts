import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'foody';
  selectedData = [];
  deletedItem = [];

  addItem(newItem: any) {
    this.selectedData = newItem;
  }

  addRemovedItem(newItem: any) {
    this.deletedItem = newItem;
  }
}
