import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: BehaviorSubject<User[]> = this.userService.users$

  constructor(
    private userService: UsersService
  ) {}

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    if(form.valid){
     this.userService.addOne(form.value).subscribe();
    }
  }

  deleteUser(id: string){
    this.userService.deleteOne(id).subscribe();
  }
}
