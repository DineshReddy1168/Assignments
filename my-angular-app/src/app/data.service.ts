import { Injectable } from '@angular/core';

// Step 1: Define the Company interface
export interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  employees: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Step 2: Add company data here
  private companies: Company[] = [
    {
      id: 1,
      name: 'Bhavna Software India (P) Ltd.',
      industry: 'Software',
      location: 'Hyderaba, Noida, USA',
      employees: 500,
      description: 'Bhavna Corp. - "Think Locally - Work Globally" is driven by a passion to deliver the most innovative and cost-effective solutions to its clients. We provide a combination of engineering consultancy, offshore engineering services, and turnkey solutions. Working collaboratively with our clients engineering management teams.'
    },
    {
      id: 2,
      name: 'Amazon',
      industry: 'Software',
      location: 'Headquartered in Seattle',
      employees: 1000,
      description: 'Amazon (Amazon.com) is the worlds largest online retailer and one of the largest providers of cloud services.As of 2025, it is considered a giant in both e- commerce and cloud computing.'
    },
    {
      id: 3,
      name: 'SkyLine Builders',
      industry: 'Construction',
      location: 'Dallas, TX',
      employees: 500,
      description: 'Building modern infrastructure and skyscrapers.'
    }
  ];

  getRecords(): Company[] {
    return this.companies;
  }

  getRecordById(id: number): Company | undefined {
    return this.companies.find(c => c.id === id);
  }
}
