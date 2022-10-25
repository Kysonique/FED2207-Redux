let billTotal = document.getElementById('billPut');
// let perTotal = document.getElementById('perTotal');
// let perTip = document.getElementById('perTip');
let numPeople = document.getElementById('numPeople')
// let tipPercent = document.getElementsByClassName('btnTip.value')

let perFive = document.getElementById('per5');
let perTen = document.getElementById('per10');
let perFifteen = document.getElementById('per15');
let perTwtFive = document.getElementById('per25');
let perFifty = document.getElementById('per50');
let customInput = document.getElementById('customInPut')

//button event listeners
    perFive.addEventListener("click", (event) =>{
        console.log(perFive.value)
        return perFive.value
    });

    perTen.addEventListener("click", (event) =>{
        return perTen.value
    });

    perFifteen.addEventListener("click", (event) =>{
        return perFifteen.value
    });

    perTwtFive.addEventListener("click", (event) =>{
        return perTwtFive.value
    });

    perFifty.addEventListener("click", (event) =>{
        return perFifty.value
    });

//inputs even listeners
    billTotal.addEventListener("keyup", () => {
        console.log(billTotal.value)
        return billTotal.value
        
    });

    numPeople.addEventListener("keyup", () => {
        console.log(numPeople.value)
        return numPeople.value
    });

    customInput.addEventListener("keyup", () => {
        return customInput.value
    });




//functions to run the calculator    
    function myCalculator(billAmount, tipAmount){
        return billAmount * tipAmount;
    }

  let ttA  =  function billSplit(billAmount, numPeople){
        //console.log(billAmount/numPeople)
        document.getElementById('perTotal') = ttA;

       // return billAmount/numPeople;
    }

  let ttB =  function tipSplit(tipTotal, numPeople){
        return tipTotal/numPeople
    }

    // document.getElementById('perTotal') = ttA;
    // document.getElementById('perTip') = ttB;
