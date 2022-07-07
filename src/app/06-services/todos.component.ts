import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';

@Component({
  template: '',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  message: any = null;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos();
    // this.service.getTodos().subscribe((t) => (this.todos = t));
  }

  add() {
    var newTodo = { title: '... ' };
    // this.service.add(newTodo).subscribe((t, err) => {
    //   this.todos.push(t);
    //   this.message = err;
    // });
  }

  delete(id: number) {
    if (confirm('Are you sure?')) this.service.delete(id);
  }
}
