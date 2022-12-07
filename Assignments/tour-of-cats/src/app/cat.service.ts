import { Injectable } from '@angular/core';
import { Cat } from './cat';
import { CATS } from './mock-cats';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  getCats(): Observable<Cat[]> {
    const cats = of(CATS);
    return cats;
  }

  constructor() { }
}
