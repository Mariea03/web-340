// saving-account.js
constEventEmitter = require("events");

class BankAccount extends EventEmitter{
    constructor(){
        super();
        this.balance=0
    }

    deposit(amount){
     this.balance +=amount;
     this.emit("deposit", amount);
    }

    withdraw(amount){
        if(amount>this.balance){
         this.emit("insufficientFunds",amount);
        } else{
            this.balance -=amount;
            this.emit('withdraw',amount);
        }
    }
}

const account=new BankAccount();//create a new BankAccount object

account.on("deposit",(amount)=>{
    console.log( `Deposited ${amount}. New balance:${account.balance}`);
});

account.on("withdraw",(amount)=>{
    console.log(`withdrew${amount}. New balance:${account.balance}`);
});

account.on("insufficientFunds",(amount)=>{
    console.log(`Attempted to withdraw $${amount},but only $${account.balance}available.`);
});

//perform some actions
account.deposit(100);
account.withdraw(50);
account.withdraw(60);