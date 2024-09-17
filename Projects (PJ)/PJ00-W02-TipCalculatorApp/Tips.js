let billTotal = document.getElementById('billPut');
// let perTotal = document.getElementById('perTotal');
// let perTip = document.getElementById('perTip');
let numPeople = document.getElementById('numPeople')
let tipPercent = document.getElementsByClassName('btnTip')

let perFive = document.getElementById('per5');
let perTen = document.getElementById('per10');
let perFifteen = document.getElementById('per15');
let perTwtFive = document.getElementById('per25');
let perFifty = document.getElementById('per50');
let customInput = document.getElementById('customInPut');


let resetBtn = document.getElementById('resetBtn');



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
        //console.log(billTotal.value)
        return billTotal.value
        
    });

    numPeople.addEventListener("keyup", () => {
       //

        return numPeople.value
    });

    customInput.addEventListener("keyup", () => {
        // console.log(customInput.value)
        return customInput.value
    });




//functions to run the calculator    
let billAmount = billTotal.value;
let tipAmount = tipPercent.value;
let peopAmount = numPeople.value;

    function myCalculator(billAmount, tipAmount){
        //console.log(billAmount * tipAmount);
        return billAmount * tipAmount;
    }
    

    function billSplit(billAmount, numPeople){
        //console.log(billAmount/numPeople)
        
        return billAmount/numPeople;

    } //return perTotal.innerText = `${billSplit}`;
    document.getElementById('perTotal').innerHTML = billSplit()



    function tipSplit(tipTotal, numPeople){
        //console.lot(tipTotal/numPeople)
        return tipTotal/numPeople;
        //document.getElementById('perTip')
    }

    // document.getElementById('perTotal') = ttA;
    // document.getElementById('perTip') = ttB;
