// Expense -> description(str), --> amount(number)
// addExpense(expenseDesc, amount)
// getAccountSummary() --> total up all expenses --> Dong has $1200 in expenses. use foreach

// 1. add income array to account
// 2. addIncome method --> description, amount parameters
// 3. Tweak getAccountSummary --> Dong has a balance of $10. $100 in income. $90 in expenses.

const account = {
    name: 'Dong',
    income: [],
    expenses: [],


    addIncome: function (incomeDesc, amount) {
        this.income.push({
            description: incomeDesc,
            amount: amount
        });
    },

    addExpense: function (expenseDesc, amount) {
        this.expenses.push({
            description: expenseDesc,
            amount: amount
        });
    },

    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;
        let accountBalance = 0;

        this.income.forEach(function (incomeSource) {
            totalIncome += incomeSource.amount;
        });

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount;
        });

        accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}


account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());

