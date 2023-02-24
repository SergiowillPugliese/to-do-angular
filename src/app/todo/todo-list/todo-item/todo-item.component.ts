import {Component, Input} from '@angular/core';
import {ToDo} from "../../../model/todo.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: ToDo;
  @Input() index!: number;

}
