const {filter} = require('../src/HealthyItems');


test("filter unhealthy items", () => {
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
    ];
    let expected = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }
    ];

    expect(filter(shoppingList)).toEqual(expected);
})