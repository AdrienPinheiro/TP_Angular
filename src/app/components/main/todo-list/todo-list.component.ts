import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { Todo } from 'src/app/shared/models/todo';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { TodosService } from 'src/app/shared/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: BehaviorSubject<Todo[]> = this.todoService.todos$
  categories$: BehaviorSubject<Category[]> = this.categoryService.categories$

  idCategory: EventEmitter<string> = new EventEmitter();

  category: Category = {id: '', name: ''}

  constructor(
    private todoService: TodosService,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.todoService.findAll().subscribe();
    this.categoryService.findAll().subscribe();
  }

  addTodo(todo: NgForm){
    this.todoService.addOne({id: '', id_user: '',id_category: this.category.id, message: todo.value, done: false})
  }

  check(id: string, done: boolean){
    console.log(id, done);
    this.todoService.check(id, done).subscribe();
  }

  deleteTodo(id: string){
    this.todoService.deleteOne(id).subscribe();
  }

  observerSelect(category: Category){
    this.category = category
    this.idCategory.emit(category.id)
  }
}
