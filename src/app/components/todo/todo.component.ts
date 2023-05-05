import { Component } from '@angular/core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title: String = 'Todo';
  todos: Array<Todo> = [];
  inputTodo: String = '';
  faTrash = faTrash;
  faPlus = faPlus;

  ngOnInit() {
    this.todos = [
      { content: 'First Task', completed: true },
      { content: 'Second Task', completed: false },
      { content: 'Third Task', completed: false }
    ];
  }

  toggleDone( id: number ) {
    return this.todos.map( ( todo: Todo, index: number ) => {
      if( index == id ) {
        todo.completed = ! todo.completed;
      }
    });
  }

  deleteTodo( id: number ) {
    this.todos = this.todos.filter( ( todo: Todo, index: number ) => index !== id );
  }

  addTodo() {
    this.todos = [
      {
        content: this.inputTodo,
        completed: false
      },
      ...this.todos
    ];

    this.inputTodo = '';
  }
}
