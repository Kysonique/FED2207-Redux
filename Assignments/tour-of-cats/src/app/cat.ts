export interface Cat {
    breed: string;
    origin: string;
    size: {
        height: number[];   //smallest-largest inches
        length: number[];    //smallest-largest inches
        weight: number[];    //smallest-largest pounds
    },
  
    temperment: string[];
  
    coat: string[];
  
    lifeExpectancy: number[];

    image: string;
  }
  