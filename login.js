document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField =document.getElementById('user-email');
    const email =emailField.value ;
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value ;
   
    // verify email and password check 
    if(email==='sirajul9081@gmail.com' && password ==='sirajul'){
        window.location.href='bank.html'
    }
    else{
        alert('tui ato kharap kno vlo ke hobi na ')
    }
})