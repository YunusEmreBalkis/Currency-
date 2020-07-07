
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const amount = document.getElementById("amount");

eventListeners();

const curren = new Currency("USD","TRY"); 
const userınter = new UI(firstSelect,secondSelect);

function eventListeners(){

    amount.addEventListener("input",changecurr);
    firstSelect.onchange = function(){
        curren.changefirstcurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        userınter.changefirst();

    }
    secondSelect.onchange = function(){
        curren.changesecondcurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        userınter.changesecond();
    }


}

function changecurr(){

    curren.changeamount(amount.value);
    curren.change()
    .then(result =>{
        userınter.displayamount(result);
    })
    .catch(err => console.log(err));



}