import { Component } from '@angular/core';
import { Cat } from '../cat';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cats: Cat[] = [];

  constructor (private catService: CatService) {}
  
  getCats(): void {
    this.catService.getCats()
    .subscribe(cats => this.cats = cats )
  }

}
