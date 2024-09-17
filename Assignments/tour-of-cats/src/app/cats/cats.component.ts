import { Component } from '@angular/core';
import { Cat } from '../cat';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  cats: Cat[] = [];
  
  getCats():void {
    this.catService.getCats()
    .subscribe(cats => this.cats = cats) ;
  }
  
  selectedCat?: Cat;
  onSelect(Cat: Cat): void{
    this.selectedCat = Cat;
  }

  constructor (private catService: CatService) {}

  ngOnInit(): void{
    this.getCats();
  }
}