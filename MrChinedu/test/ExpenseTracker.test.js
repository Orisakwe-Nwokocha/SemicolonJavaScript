const {calculateTotalAmountSpent} = require('../src/ExpenseTracker');



test('calculateTotalAmountSpent', () => {
    let expenses = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 };
    expect(calculateTotalAmountSpent(expenses)).toBe(380);
})