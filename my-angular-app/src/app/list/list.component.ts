import { Component, EventEmitter, Output } from '@angular/core';
import { DataService, Company } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {  
  companies: Company[] = [];   

  @Output() recordSelected = new EventEmitter<number>();  

  constructor(private dataService: DataService) {
    this.companies = this.dataService.getRecords(); 
  }

  selectCompany(id: number) {
    this.recordSelected.emit(id);
  }
}
