import { Injectable } from '@angular/core';

import User from './user'
import { userList } from './mock-users';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return userList;
  }
}
