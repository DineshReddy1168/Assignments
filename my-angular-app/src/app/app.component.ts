import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedRecordId!: number;

  onRecordSelected(id: number) {
    this.selectedRecordId = id;
  }
}
