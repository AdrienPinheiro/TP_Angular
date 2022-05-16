import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories$: BehaviorSubject<Category[]> = this.categoryService.categories$

  constructor(
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoryService.findAll().subscribe();
  }

  onSubmit(form : NgForm){
    if(form.valid){
     this.categoryService.addOne(form.value).subscribe();
    }
  }

  deleteCategory(id: string){
    this.categoryService.deleteOne(id).subscribe();
  }

}
