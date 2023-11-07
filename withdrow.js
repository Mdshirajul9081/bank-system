document.getElementById('btn-withdrow').addEventListener('click',function(){
   const withdrowAmount = document.getElementById('withdrow-amount');
   const newWithdrowFieldString =withdrowAmount.value ;
   const newWithdrowField =parseFloat(newWithdrowFieldString);
   
   const withdrowTotalAmount = document.getElementById('withdrow-total');
   const previousWithdrowTotalAmountString=withdrowTotalAmount.innerText;
   const previousWithdrowTotalAmount =parseFloat(previousWithdrowTotalAmountString);
   const currentTotalAmount =previousWithdrowTotalAmount + newWithdrowField ;



   withdrowTotalAmount.innerText= currentTotalAmount;
   const balanceTotal =document.getElementById('balance-total')
   const previousBalanceTotalString = balanceTotal.innerText ;
   const previousBalanceTotal =parseFloat(previousBalanceTotalString)
   const newBalanceTotal = previousBalanceTotal - newWithdrowField ;
   
   balanceTotal.innerText =newBalanceTotal ;




   withdrowAmount.value='';

})