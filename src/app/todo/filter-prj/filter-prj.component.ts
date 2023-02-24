import {Component, OnInit} from '@angular/core';
import {FilterServiceService} from "../../service/filter-service.service";

@Component({
  selector: 'app-filter-prj',
  templateUrl: './filter-prj.component.html',
  styleUrls: ['./filter-prj.component.scss']
})
export class FilterPrjComponent implements OnInit{
  filtersProjects!: string[];

  constructor(private filtersService: FilterServiceService){}

  ngOnInit(): void {
    this.filtersProjects = this.filtersService.getFiltersProjects();
  }
}
