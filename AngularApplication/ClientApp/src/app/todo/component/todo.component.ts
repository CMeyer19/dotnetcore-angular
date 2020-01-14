import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ToDoActions from '../todo.action';
import ToDo from '../todo.model';
import ToDoState from '../todo.state';

@Component({
  selector: 'app-to-do',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class ToDoComponent implements OnInit, OnDestroy {
  todo$: Observable<ToDoState>;
  ToDoSubscription: Subscription;
  ToDoList: ToDo[] = [];

  Title: string = '';
  IsCompleted: boolean = false;

  todoError: Error = null;

  constructor(private store: Store<{ todos: ToDoState }>) {
    this.todo$ = store.pipe(select('todos'));
  }

  ngOnInit(): void {
    this.ToDoSubscription = this.todo$
      .pipe(
        map(x => {
          this.ToDoList = x.ToDos;
          this.todoError = x.ToDoError;
        })
      )
      .subscribe();

    this.store.dispatch(ToDoActions.BeginGetToDoAction());
  }

  createToDo(): void {
    const todo: ToDo = {title: this.Title, isCompleted: this.IsCompleted};
    this.store.dispatch(ToDoActions.BeginCreateToDoAction({payload: todo}));
    this.Title = '';
    this.IsCompleted = false;
  }

  ngOnDestroy(): void {
    if (this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
}
