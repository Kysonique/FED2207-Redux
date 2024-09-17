# Data Building
###### Data Building
```js
// code goes here 
let catObject = {   //cat breed, fur type
    breed:,
    origin:,
    size:,
    temperment:[], //arr of strings
    coat:,
    lifeExpectancy:
}
let americanBobtail ={
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

let savannah ={
    breed: "Savannah",
    origin: "United States",
    size: {
        height: [12, 14],
        length: [20, 22],
        weight: [15, 28],
    },

    temperment:[
        "friendly", 
        "affectionate", 
        "playful", 
        "intelligent"
    ],
    coat: ["short hair"],
    lifeExpectancy: [18, 20],
}

let chartreux ={
    breed: "Chartreux",
    origin: [
        "France", 
        "Syria"
    ],
    size: {
        height: [8, 11],
        length: [15, 18],
        weight: [11, 18],
    },

    temperment:[
        "playful", 
        "friendly", 
        "intelligent", 
        "sweet"
    ],

    coat: ["short hair"],

    lifeExpectancy: [11, 18],
}

let balinese ={
    breed: "Balinese",
    origin: [
        "united States"
    ],
    size: {
        height: [8, 10],
        length: [12, 16],
        weight: [4, 10],
    },

    temperment:[
        "affectionate",
        "inquisitive",
        "outgoing",
        "intelligent"
    ],

    coat:["long hair"],

    lifeExpectancy: [12, 15],
}

let sokoke ={
    breed: "Sokoke",
    origin: [
        "Kenya"
    ],
    size: {
        height: [7, 8],
        length: [12, 16],
        weight: [5, 10],
    },

    temperment:[
        "friendly", 
        "intelligent", 
        "inquisitive",
        "dog-like"

    ],

    coat: ["short hair"],

    lifeExpectancy: [15, 20],
}
let americanCurl ={
    breed: "American Curl",
    origin: [
\        "United States"
    ],
    size: {
        height: [8, 10],
        length: [12, 16],
        weight: [5, 10],
    },

    temperment:[
        "curious",
        "intelligent",
        "social",
        "playful"
    ],

    coat: ["medium hair"],

    lifeExpectancy: [11, 15],
}
let chantillytiffany ={
    breed: "Chantilly Tiffany",
    origin: [
        "United States"
    ],
    size: {
        height: [8, 10],
        length: [12, 16],
        weight: [8, 15],
    },

    temperment:[
        "playful", 
        "talkative",
        "gentle", 
        "sociable"
    ],

    coat: ["long hair"],

    lifeExpectancy: [11, 15],
}

let orientalShorthair ={
    breed: "Oriental Shorthair",
    origin: [
        "United Kingdom"
    ],
    size: {
        height: [8, 10],
        length: [11, 14],
        weight: [6, 12],
    },

    temperment:[
        "curious",
        "playful", 
        "affectionate", 
        "easygoing", 
    ],

    coat: ["short hair"],

    lifeExpectancy: [12, 15],
}

let cornishRex ={
    breed: "Cornish Rex",
    origin: [
        "united Kingdom"
    ],
    size: {
        height: [12, 14],
        length: [12, 16],
        weight: [6, 9],
    },

    temperment:[
        "extroverted", 
        "comical", 
        "affectionate", 
        "inquisitive"
    ],

    coat: ["short hair"],

    lifeExpectancy: [12, 20],
}

let ukrainianLevkoy ={
    breed: "Ukrainian Levkoy",
    origin: [
        "France", 
        "Syria"
    ],
    size: {
        height: [8, 10],
        length: [12, 16],
        weight: [11, 15],
    },

    temperment:[
        "playful", 
        "affectionate", 
        "curious", 
        "sociable"
    ],

    coat: ["hairless"],

    lifeExpectancy: [15, 20],
}



//create a class to handle the structure of these objects
```


```typescript
//create an interface that will act as a template for these objects
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
}

```