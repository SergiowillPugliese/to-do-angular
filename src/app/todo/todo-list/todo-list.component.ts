import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoServiceService} from "../../service/todo-service.service";
import {ToDo} from "../../model/todo.model";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todoList!: ToDo[];

  private obs!: Subscription;

  constructor(
    private todoService: TodoServiceService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.todoList = this.todoService.getAll()
    this.obs = new Subscription()

    this.obs.add(this.route.params.subscribe(
      (params: Params) => {
        this.todoService.params = params['filter'];
        // @ts-ignore
        this.todoList = this.todoService.getFilteredToDo() //?? [];
      }
    ))
    this.obs.add(this.todoService.sbj.subscribe(
      (data) => {
        // @ts-ignore
        this.todoList = this.todoService.getFilteredToDo();
      }
    ))
  }

  ngOnDestroy() {
    this.obs.unsubscribe()
  }
}
