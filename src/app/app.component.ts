import { Component, OnInit } from '@angular/core';
import { Cat } from './cat.model';
import { CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-infinite-scroll-example';
  
  page = 1;
  cats: Cat[] = []

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService
      .getCats(this.page)
      .subscribe((cats: Cat[]) => {
        this.cats = cats;
      });
  }

  onScroll(): void {
    this.catService
      .getCats(++this.page)
      .subscribe((cats: Cat[]) => {
        this.cats.push(...cats);
      });
  }
}
