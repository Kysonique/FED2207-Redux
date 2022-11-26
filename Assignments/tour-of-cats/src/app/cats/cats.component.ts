import { Component } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  cat: Cat ={
    breed: "American Bobtail",
    origin: "United States",
    size: {
        height: [10, 14],   //smallest-largest inches
        length: [12, 20],   //smallest-largest inches
        weight: [7, 18],    //smallest-largest pounds
    },

    temperment:[
        "lively", 
        "intelligent", 
        "personable", 
        "curious"
    ], 

    coat: [
        "short hair", 
        "long hair"
    ],

    lifeExpectancy: [12, 15],
}
 constructor () {}

}