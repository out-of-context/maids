import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersAPI {
  serviceAPI = 'https://reqres.in/api/users';
  constructor(private httpService: HttpClient) {}

  getDashboardItems(page: number, filter?: string): Observable<any> {
    var url = this.serviceAPI;
    return this.httpService.get(url, {
      params: {
        page: page,
      },
    });
  }

  getItemDetails(itemId?: any): Observable<any> {
    var url = this.serviceAPI + `/${itemId}`;
    return this.httpService.get(url);
  }
}
