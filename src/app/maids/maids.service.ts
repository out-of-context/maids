import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaidsService {
  public serachInputEmitter = new EventEmitter<any>();
  constructor() {}
}
