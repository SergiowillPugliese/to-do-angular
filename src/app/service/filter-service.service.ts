import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {TodoServiceService} from "./todo-service.service";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  filters = ['All', 'Important', 'Next 7 Days', 'Shared', 'Private'];
  filtersProjects = ['Work', 'Personal'];


  constructor() { }

  getFilters() {
    return this.filters.slice();
  }

  getFiltersProjects() {
    return this.filtersProjects.slice();
  }
}
