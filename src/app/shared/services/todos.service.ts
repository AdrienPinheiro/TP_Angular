import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private _urlApi = environment.urlApi + '/todos'

  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(
    private http: HttpClient
  ) {}

  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public findAll() {
    return this.http
      .get<Todo[]>(this._urlApi)
      .pipe(tap(todos => this.todos$.next(todos)));
  }

  public findOne(id: string){
    return this.http.get<Todo>(this._urlApi + '/' + id)
  }

  public addOne(todo : Todo){
    return this.http.post<Todo>(this._urlApi, todo , this.httpHeaders)
  }

  public deleteOne(id: string){
    return this.http.delete<Todo[]>(this._urlApi+'/'+id, this.httpHeaders)
  }

  public check(id: string, done: boolean){
    return this.http.patch<Todo[]>(this._urlApi+'/'+id, done, this.httpHeaders)
  }
}
