class Account{
    constructor(accNO,holderName,balance){
        this.accNo = accNO
        this.holderName = holderName
        this.balance = balance
    }

    getBalance(){
        return this.balance
    }
    deposit(amount){
        this.balance+=amount
        console.log(`${amount} is credited to the account No ****** ${this.accNo.slice(5)}
        Available balance: ${this.balance}`)
    }
    withdraw(amount){
    
        if(this.balance>amount)
            {
            this.balance-=amount
            console.log(`${amount} is debited from the account No ****** ${this.accNo.slice(6)}
            Available balance: ${this.balance}`)
         }else{
        console.log('Insufficient balance')
         }
    }
}


const acc1=new Account('6705000890','Ananya',50000);
acc1.deposit(10000);
acc1.withdraw(5000);