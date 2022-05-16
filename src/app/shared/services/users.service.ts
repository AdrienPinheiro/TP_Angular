import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _urlApi = environment.urlApi + '/users'

  users$ = new BehaviorSubject<User[]>([]);

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
      .get<User[]>(this._urlApi)
      .pipe(tap(users => this.users$.next(users)));
  }

  public findOne(id: string){
    return this.http
      .get<User>(this._urlApi + '/' + id)
  }

  public addOne(user : User){
    console.log(user)
    return this.http.post<User>(this._urlApi, user, this.httpHeaders)
  }

  public deleteOne(id: string){
    console.log(id)
    return this.http.delete<User>(this._urlApi + '/' + id)
  }
}
