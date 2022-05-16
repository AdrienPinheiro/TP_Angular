import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$: BehaviorSubject<User[]> = this.userService.users$

  user : User = {id: '', pseudo: ''}

  @Input() idUser: string = " "

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe();
  }

  selectUser(user: User){
    this.user = user
    console.log(user);
    this.idUser = user.id
  }
}


