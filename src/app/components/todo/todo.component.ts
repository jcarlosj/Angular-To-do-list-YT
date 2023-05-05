import { Component } from '@angular/core';

import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title: String = 'Todo';
  todos: Array<Todo> = [];

  ngOnInit() {
    this.todos = [
      { content: 'First Task', completed: true },
      { content: 'Second Task', completed: false },
      { content: 'Third Task', completed: false }
    ];
  }
}
