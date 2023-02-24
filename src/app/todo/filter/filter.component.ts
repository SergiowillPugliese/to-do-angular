import {Component, ElementRef, OnInit, Output} from '@angular/core';
import {FilterServiceService} from "../../service/filter-service.service";
import {TodoServiceService} from "../../service/todo-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  filters!: string[];

  constructor(
    private filtersService: FilterServiceService,
    private todoService: TodoServiceService,

  ){}

  ngOnInit(): void {
    this.filters = this.filtersService.getFilters();
  }


}
