// step-1 addEventListener to deposit button 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2.a get the deposit amount to the deposit input field 
    const depositField=document.getElementById('deposit-amount')
    // step-2.b get the deposit input field value 
    const newDepositAmountString=depositField.value ;
    const newDepositAmount=parseFloat(newDepositAmountString);

//    step-3 get the  current total deposit amount 
   const depositTotalElement =document.getElementById('deposit-total');
//    it is not input field so i use to the innertext 
   const previousDepositTotalString =depositTotalElement.innerText ;
//    convest to the string to float number 
   const previousDepositTotal =parseFloat(previousDepositTotalString);
//  step-4  previousDepositTotal add newdeposittotal amount 
   const currentTotalAmount = previousDepositTotal + newDepositAmount ;
//    set the deposit balance total 
    depositTotalElement.innerText = currentTotalAmount 
//   step-5 get the current total add the balance section 
     const balanceTotalElement=document.getElementById('balance-total');

    const previousbalanceTotalElementString =balanceTotalElement.innerText ;
    const previousbalanceTotalElement = parseFloat(previousbalanceTotalElementString)


// calculat the current total balance total 
     const currentTotalBalance =  previousbalanceTotalElement + newDepositAmount ;

// step-6 calculat the current total balance total 
   balanceTotalElement.innerText = currentTotalBalance;
    






    // step -7 deposit field clear 
    depositField.value ='';

})