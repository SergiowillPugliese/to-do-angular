import {Component, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, Subscription} from "rxjs";
import {TodoServiceService} from "../service/todo-service.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search = new FormControl()
  private obs!: Subscription;

  constructor(private serviceToDo: TodoServiceService) {
  }

  ngOnInit() {
    this.search.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data) => {
        this.serviceToDo.inputSearch = data;
        this.serviceToDo.getTodo()
      });
  }

}
