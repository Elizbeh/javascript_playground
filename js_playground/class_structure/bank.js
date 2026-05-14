class BankAccount {
    constructor(owner, amount, isLoggedIn) {
        this.owner = owner
        this.amount = amount
        this.isLoggedIn = true
    }



     welcomeOwner() {
        if (!this.isLoggedIn) {
            console.log(`Welcome ${this.owner} good to see you!`)
        } else {
            console.log("You must logged in to continue")
        }
    }

    showBalance() {
        console.log(`Your Account Balance Is : ${this.amount}£`)
    }
    
    witdrawFromAccount(debit) {
        if (this.amount === 0) {
            console.log(`Unable to withdraw. You have ${this.amount}`)
        }
        console.log(`You witdraw ${debit}£ from your account balance. Your new Account Balance is : ${this.amount -= debit}£`)
    }

    depositToAccount(money) {
        console.log(`${money}£ added. You current Balance is ${this.amount += money}£`)
    }


}

const accountOwner1 = new BankAccount("Amenze", 200)
accountOwner1.welcomeOwner()
console.log("============================================")
accountOwner1.showBalance()
console.log("============================================")
accountOwner1.witdrawFromAccount(50)
console.log("============================================")
accountOwner1.depositToAccount(400)
console.log("############################################")
accountOwner1.witdrawFromAccount(550)


