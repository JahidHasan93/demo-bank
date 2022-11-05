const enterButton = document.getElementById("enter-btn");
enterButton.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none"
    const mainArea = document.getElementById("main-area");
    mainArea.style.display="block"
   const transactionArea=document.getElementById("transaction-area");
   transactionArea.style.display="block"
})

//transaction
const depositeButton = document.getElementById("deposite-button");
depositeButton.addEventListener("click",function(){
    const depositeAmount= document.getElementById("deposite-amount").value;
    const depositeNumber=parseFloat(depositeAmount);

    const currentBalance= document.getElementById("current-balance").innerText;
    const currentAmount= parseFloat(currentBalance);
    const cashIn = depositeNumber + currentAmount;
    document.getElementById("current-balance").innerText = cashIn;
    
    //totalBalance
    const savingsAmount=document.getElementById("total-balance").innerText;
    const savingsNumber=parseFloat(savingsAmount);
    const save=depositeNumber+savingsNumber;
    document.getElementById("total-balance").innerText=save;

    document.getElementById("deposite-amount").value="";
})

    //withdraw section
    const cashOut = document.getElementById("cash-out");
    cashOut.addEventListener("click",function(){

    const withdrawEntry= document.getElementById("withdraw-entry").value;
    const withdrawNumber=parseFloat(withdrawEntry);

    const withdrawAmount= document.getElementById("withdraw-amount").innerText;
    const withdrawnums= parseFloat(withdrawAmount);
    const totalWithdraw= withdrawNumber+withdrawnums;
    document.getElementById("withdraw-amount").innerText=totalWithdraw;
    document.getElementById("withdraw-entry").value="";

    //total withdraw
    const totalSavings=document.getElementById("total-balance").innerText;
    const savingsNums=parseFloat(totalSavings);
    const leftBalance =savingsNums-withdrawNumber;
    document.getElementById("total-balance").innerText=leftBalance;
    
})
