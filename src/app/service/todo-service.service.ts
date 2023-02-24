import {Injectable} from '@angular/core';
import * as moment from "moment/moment";
import {ToDo} from "../model/todo.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  toDoChanged = new Subject<ToDo[]>()

  toDo = [
    new ToDo(1, 'fare la spesa', 'personal', true, false, moment('02/02/2023', 'DD/MM/YYYY').toDate()),
    new ToDo(2, 'fare questa benedetta to-do', 'Web Application', true, true, moment('05/02/2023', 'DD/MM/YYYY').toDate()),
    new ToDo(3, 'andare a farsi benedire', 'Personal', false, true, moment('25/03/2023', 'DD/MM/YYYY').toDate()),
    new ToDo(4, 'ciaone proprio', 'Web Applications', false, true, moment('25/02/2023', 'DD/MM/YYYY').toDate()),
    new ToDo(5, 'task 5', 'Personal', false, true, moment('25/10/2023', 'DD/MM/YYYY').toDate()),
    new ToDo(6, 'task 6', 'Web Applications', false, true, moment('25/11/2023', 'DD/MM/YYYY').toDate()),
    new ToDo(7, 'task 7', 'Web Applications', false, true, moment('25/04/2023', 'DD/MM/YYYY').toDate()),
    new ToDo(8, 'task 8', 'Personal', true, true, moment('25/06/2023', 'DD/MM/YYYY').toDate()),
    new ToDo(9, 'task 9', 'Web Applications', false, true, moment('25/02/2023', 'DD/MM/YYYY').toDate()),
    new ToDo(10, 'task 10', 'Personal', true, true, moment('25/09/2023', 'DD/MM/YYYY').toDate())
  ];

  constructor() {
  }

  getToDo() {
    return this.toDo.slice();
  }

  getFilteredToDo(filter: string) {
    console.log(filter)
    return this.toDo.filter((element: any) => element[filter]);



  }
}
