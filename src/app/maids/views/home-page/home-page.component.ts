import { Component, OnInit } from '@angular/core';
import { UsersService } from './home-page.service';
import { MaidsService } from '../../maids.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  public users: any = [];
  searchInputSub: Subscription = new Subscription();
  isLoading = false;
  total = 0;
  searchInput: any;
  originalUsersList: any;
  constructor(
    public usersService: UsersService,
    private maidsService: MaidsService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getUsers(1);
    this.searchInputSub = this.maidsService.serachInputEmitter.subscribe(
      (searchInput) => {
        this.searchInput = searchInput;
        if (searchInput) {
          this.users = this.users.filter((item: any) => {
            return item.id == +searchInput;
          });
        } else {
          this.users = this.originalUsersList;
        }
      }
    );
  }

  getUsers(page: number) {
    this.isLoading = true;
    this.usersService.getUsers(page).subscribe(
      (users) => {
        this.usersService.users = users;
        this.users = users.data;
        this.total = users.total;
        this.isLoading = false;
        this.originalUsersList = this.users;
      },
      (err) => {
        this.handleNetworkErr();
        this.isLoading = false;
      }
    );
  }

  getItemUrl(url: any) {
    return url;
  }

  handleNetworkErr() {}

  onUserMoreClicked(item: any) {
    let url = 'Maids/';
    url = url.concat(item.id);
    this.route.navigate([url]);
    this.usersService.selectedUser = item.id;
  }

  getNextPage() {
    this.getUsers(this.usersService.currentPage + 1);
    this.usersService.currentPage++;
  }

  getPreviousPage() {
    this.getUsers(this.usersService.currentPage - 1);
    this.usersService.currentPage--;
  }

  disableNextButton() {
    return this.usersService.currentPage * 6 >= this.total;
  }
}
