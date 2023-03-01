import {Injectable} from '@angular/core';
import * as moment from "moment/moment";
import {ToDo} from "../model/todo.model";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  inputSearch!: string;
  params = 'all';

  sbj = new Subject();

  toDo: ToDo[] = [
    new ToDo(1, 'task 1', 'personal', true, false, moment('02/03/2023', 'DD/MM/YYYY').format('DD/MM/YYYY')),
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
  toDoMap = new Map(
    [
      ['all', () => this.getAll()],
      ['important', () => this.getImportantShared()],
      ['next 7 days', () => this.getDays()],
      ['shared', () => this.getImportantShared()],
      ['private', () => this.getPrivate()],
      ['work', () => this.getWork()],
      ['personal', () => this.getWork()]
    ]
  );
  constructor() {
  }

  getTodo() {
    this.getFilteredToDo()
    this.sbj.next(this.toDo.slice())
  }

  getFilteredToDo() {
    const func = this.toDoMap.get(this.params)
    return func && func();
  }
  getAll() {
   return this.toDo.slice();
  };
  getImportantShared(){
    if (this.inputSearch) {
      return this.toDo.filter((e:any) => e[this.params] && e.task
        .includes(this.inputSearch))
    } else {
      return this.toDo.filter((element: any) => element[this.params]);
    }
  };
  getDays(){
    let today = moment();
    const format = 'DD/MM/YYYY'
    if (this.inputSearch) {
      return this.toDo.filter(el => moment(el.data, format)
        .isBetween(today, moment()
          .add(7, 'days'), undefined, '[]') && el.task.includes(this.inputSearch));

    } else {
      return this.toDo.filter(el => moment(el.data, format)
        .isBetween(today, moment()
          .add(7, 'days'), undefined, '[]'));
    }
  };
  getPrivate(){
    if (this.inputSearch) {
      return this.toDo.filter((element: any) => !element.shared && element.task
        .includes(this.inputSearch));
    } else {
      return this.toDo.filter((element: any) => !element.shared);
    }
  }
  getWork(){
    if (this.inputSearch) {
      return this.toDo.filter((element: any) => element.tipo ===  this.params
        .charAt(0).toUpperCase() + this.params.slice(1) && element.task
        .includes(this.inputSearch))
    } else {
      return this.toDo.filter((element: any) => element.tipo ===  this.params
        .charAt(0).toUpperCase() + this.params.slice(1));
    }
  }
}






