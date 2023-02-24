import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  filters = ['All', 'Important', 'Next 7 Days', 'Shared With', 'Private'];
  filtersProjects = ['Web Applications', 'Personal'];

  constructor() { }

  getFilters() {
    return this.filters.slice();
  }

  getFiltersProjects() {
    return this.filtersProjects.slice();
  }
}
