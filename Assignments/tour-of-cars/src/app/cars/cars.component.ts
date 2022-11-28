import { Component } from '@angular/core';
import { Car } from '../car';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  car: Car = {
    make: 'Honda',
    model: 'Civic',
    year: 1992,
    trim: {
      doors: 3,
      vehicleType: 'Hatchback DX 5-speed',
    },
    engine: {
        cylinder: 4,
        liter: 1.5,
    },

    horsePower: {
        watts: 102,
        rpm: 5900,
    },

    torque: {
        watts: 98,
        rpm: 5000,
    },
  }
}
