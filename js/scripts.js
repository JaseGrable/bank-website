//Business Logic

function Bank() {
    this.BankAccount = {};
    this.currentID = 0;
}

function BankAccount(name, initialDeposit) {
    this.name = name;
    this.currentBalance = initialDeposit;
}

BankAccount.prototype.deposit = function(deposit) {
    this.currentBalance = currentBalance + deposit
}

BankAccount.prototype.withdrawal = function(withdrawal) {
    this.currentBalance = currentBalance - withdrawal
}

//User Interface Logic1

function displayBalance(currentBalance) {
    let currentBal = document.querySelector("span#curBal");
    // currentBal.innerText = null
    currentBal.innerText = currentBalance;
}

function createAccount(event) {
    event.preventDefault();
    const nameInput = document.querySelector("input#name").value;
    const initBal = document.querySelector("input#initialDeposit").value;
    let newAccount = new BankAccount(nameInput, initBal);
    document.querySelector("input#name").value = null;
    document.querySelector("input#initialDeposit").value = null;
    displayBalance(initBal);
}

function changeBalance(currentBalance) {
    const deposit = parseInt(document.querySelector("input#deposit").value);
    const withdrawal = parseInt(document.querySelector("input#withdrawal").value);
    currentBalance = currentBalance + deposit - withdrawal;
    console.log(deposit);
    console.log(withdrawal);
}

function secondSubmit(event) {
    event.preventDefault();
    let secondCurrentBal = document.querySelector("span#curBal").value;
    // document.querySelector("input#deposit").value = null;
    // document.querySelector("input#withdrawal").value = null;
    changeBalance(secondCurrentBal);
    displayBalance(secondCurrentBal);
}

window.addEventListener("load", function () {
    document.querySelector("form#creation").addEventListener("submit", createAccount);
    document.querySelector("form#changeBal").addEventListener("submit", secondSubmit);
});