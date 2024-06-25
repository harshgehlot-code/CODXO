let expenses = [];
let totalExpense = 0;

document.addEventListener("DOMContentLoaded", function() {
    const addExpenseForm = document.getElementById("add-expense-form");
    addExpenseForm.addEventListener("submit", addExpense);

    const expenseList = document.getElementById("expense-list");
    const totalExpenseAmount = document.getElementById("total-expense-amount");

    displayExpenses();
});

function addExpense(event) {
    event.preventDefault();
    const expenseName = document.getElementById("expense-name").value;
    const expenseAmount = parseFloat(document.getElementById("expense-amount").value);

    if (expenseName && expenseAmount) {
        const newExpense = {
            name: expenseName,
            amount: expenseAmount
        };
        expenses.push(newExpense);
        totalExpense += expenseAmount;
        displayExpenses();
        document.getElementById("expense-name").value = "";
        document.getElementById("expense-amount").value = "";
    }
}

function displayExpenses() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";
    expenses.forEach((expense, index) => {
        const expenseListItem = document.createElement("li");
        expenseListItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(expenseListItem);
    });
    document.getElementById("total-expense-amount").textContent = `$${totalExpense.toFixed(2)}`;
}