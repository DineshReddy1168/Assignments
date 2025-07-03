import { Component, Input, OnChanges } from '@angular/core';
import { DataService, Company } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnChanges {
  @Input() recordId!: number;
  company?: Company;

  constructor(private dataService: DataService) { }

  ngOnChanges() {
    if (this.recordId !== undefined) {
      this.company = this.dataService.getRecordById(this.recordId);
    }
  }
}
