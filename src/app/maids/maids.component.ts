import { Component, OnInit } from '@angular/core';
import { MaidsService } from './maids.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maids',
  templateUrl: './maids.component.html',
  styleUrls: ['./maids.component.scss'],
})
export class MaidsComponent implements OnInit {
  public searchInput: any;
  constructor(private maidsService: MaidsService) {}

  ngOnInit(): void {}

  onSearchInputChanged() {
    setTimeout(() => {
      this.maidsService.serachInputEmitter.emit(this.searchInput);
    }, 300);
  }
}
