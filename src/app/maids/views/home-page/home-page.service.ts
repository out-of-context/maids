import { Injectable } from '@angular/core';
import { UsersAPI } from '../../../../APIs/users.api';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users: any;
  selectedUser: any;
  public currentPage = 1;
  filters = '';
  constructor(private usersAPI: UsersAPI) {}

  getUsers(page: number, filter?: string) {
    return this.usersAPI.getDashboardItems(page, filter);
  }
  getUserDetails(itemId: number) {
    return this.usersAPI.getItemDetails(itemId);
  }
}
