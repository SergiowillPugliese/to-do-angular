import {Component, OnInit} from '@angular/core';
import {TodoServiceService} from "../../service/todo-service.service";
import {ToDo} from "../../model/todo.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  filter = 'all';
  todoList!: ToDo[];

  constructor(
    private todoService: TodoServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.filter = params["filter"];
        this.todoList = this.todoService.getFilteredToDo(this.filter.trim())();
      }
    )

    //this.todoList = this.todoService.getToDo();
  }
}
