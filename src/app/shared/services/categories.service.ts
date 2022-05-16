import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _urlApi = environment.urlApi + '/categories'

  categories$ = new BehaviorSubject<Category[]>([]);

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
      .get<Category[]>(this._urlApi)
      .pipe(tap(categories => this.categories$.next(categories)));
  }

  public findOne(id: string){
    return this.http.get<Category>(this._urlApi +'/'+ id)
  }

  public addOne(category : Category){
    console.log(category)
    return this.http.post<Category>(this._urlApi, category , this.httpHeaders)
  }

  public deleteOne(id: string){
    return this.http.delete<Category[]>(this._urlApi+'/'+id, this.httpHeaders)
  }
}
