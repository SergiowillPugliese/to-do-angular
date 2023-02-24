import {Injectable} from '@angular/core';
import * as moment from "moment/moment";
import {ToDo} from "../model/todo.model";
import {Subject} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {FilterServiceService} from "./filter-service.service";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  toDoMap = new Map()

  toDo = [
    new ToDo(1, 'task 1', 'personal', true, false, moment('02/02/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
    new ToDo(2, 'task 2', 'Work', true, true, moment('05/02/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
    new ToDo(3, 'task 3', 'Personal', false, true, moment('25/03/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
    new ToDo(4, 'task 4', 'Work', false, true, moment('25/02/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
    new ToDo(5, 'task 5', 'Personal', false, true, moment('25/10/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
    new ToDo(6, 'task 6', 'Work', false, true, moment('25/11/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
    new ToDo(7, 'task 7', 'Work', false, true, moment('25/04/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
    new ToDo(8, 'task 8', 'Personal', true, true, moment('25/06/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
    new ToDo(9, 'task 9', 'Work', false, true, moment('25/02/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
    new ToDo(10, 'task 10', 'Personal', true, true, moment('25/09/2023', 'DD/MM/YYYY').format('DD/MM/YYYY'))
  ];

  constructor(private filterService: FilterServiceService) {
  }

  getFilteredToDo(filter: string) {
    //console.log(filter);
    this.toDoMap = new Map(
      [
        ['all', () => this.getAll(this.toDo)],
        ['important', () => this.getImportant(filter, this.toDo)],
        ['next 7 days', () => this.getDays(this.toDo)],
        ['shared', () => this.getShared(filter.trim(), this.toDo)],
        ['private', () => this.getPrivate(filter.trim(), this.toDo)],
        ['work', () => this.getWork(filter, this.toDo)],
        ['personal', () => this.getWork(filter, this.toDo)]

      ]
    );

    return this.toDoMap.get(filter);
  }

  getAll(todo: ToDo[]) {return todo.slice();};
  getImportant(value: string, todo: ToDo[]){return todo.filter((element: any) => element[value]);};
  getDays(todo: ToDo[]){
    let today=moment();
    const format = 'DD/MM/YYYY'
    return todo.filter(el => moment(el.data, format)
      .isBetween(moment(today, format), moment(today, format)
        .add(7,'days'), undefined, '[]'));
  };
  getShared(value: string, todo: ToDo[]){return todo.filter((element: any) => element[value])}
  getPrivate(value: string, todo: ToDo[]){return todo.filter((element: any) => !element.shared)} //non funziona
  getWork(value: string, todo: ToDo[]){return todo.filter((element: any) => element.tipo ===  value.charAt(0).toUpperCase() + value.slice(1))}
}

