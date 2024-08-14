import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../home-page.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserViewComponent implements OnInit {
  user: any;
  userItemId: any;
  busy = false;
  parentParams: Subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    public route: Router
  ) {}

  ngOnInit(): void {
    this.parentParams = this.activatedRoute.params.subscribe((params) => {
      if (params['id'] && params['id'] != '_') {
        this.userItemId = +params['id'];
        this.busy = true;
        this.usersService
          .getUserDetails(this.userItemId)
          .subscribe((itemDetails) => {
            this.user = itemDetails.data;
          });
      }
    });
  }

  goToHome() {
    this.route.navigate([`Maids/home-page`]);
  }
}
