import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCars():Observable<Car[]> {
    const cars = of(CARS);
    return cars;
  }
  constructor() { }
}
