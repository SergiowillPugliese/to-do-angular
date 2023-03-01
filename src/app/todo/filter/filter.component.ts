import {Component, ElementRef, OnInit, Output} from '@angular/core';
import {FilterServiceService} from "../../service/filter-service.service";
import {TodoServiceService} from "../../service/todo-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  filters!: string[];
  obs!: Subscription;

  constructor(
    private filtersService: FilterServiceService,
    private todoService: TodoServiceService,
    private route: ActivatedRoute

  ){}

  ngOnInit(): void {
    this.filters = this.filtersService.getFilters();
  }


}
