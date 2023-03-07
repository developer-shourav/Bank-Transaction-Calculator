/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  if(isNaN(newWithdrawAmount)){
    alert("Please inter valid number");
  }

  else if( newWithdrawAmount < 0){
    alert("Please inter a positive number");
  }

  else{
    const previousWithdrawTotal = getTextElementValueById("withdraw-total");
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    const previousBalanceTotal = getTextElementValueById("balance-total");
    if( previousBalanceTotal <= 0 ){
      alert("You can't withdraw. You haven't sufficient balance");
    }

    else if(previousBalanceTotal < newWithdrawTotal){
       alert(`You can't withdraw more than you balance. Your maximum withdraw limit is ${previousBalanceTotal}`);
      
    }

    else{
    setTextElementValueById("withdraw-total", newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
    }
  }
  
});

