const {distributeBooks} = require('../src/DistributeBooks');


test("distribute books to members", () => {
    let result = [
        { member: 'Emily', book: 'Emily book' },
        { member: 'Jack', book: 'Jack book' },
        { member: 'Sophia', book: 'Sophia book' },
        { member: 'Daniel', book: 'Daniel book' }
    ];
    expect(distributeBooks()).toEqual(result);
});