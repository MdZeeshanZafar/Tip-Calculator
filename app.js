const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');


let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill =  () => {
    const bill =Number(billTotalInput.value);
    const tipPercentage = Number(tipInput.value) / 100;
    const tipAmount = bill * tipPercentage;
    const totalBill = bill + tipAmount;
    const finalBill = totalBill / numberOfPeople;
    perPersonTotalDiv.innerText = `₹ ${finalBill.toFixed(2)}`;
}

const increasePeople = () => {
    numberOfPeople++;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
}

const decreasePeople = () => {
    if(numberOfPeople <=1){
        return;
    } 
    numberOfPeople--;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
}