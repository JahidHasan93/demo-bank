const enterButton = document.getElementById("enter-btn");
enterButton.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none"
    const mainArea = document.getElementById("main-area");
    mainArea.style.display="block"
    const transactionArea=document.getElementById("transaction-area");
    transactionArea.style.display="block"

})