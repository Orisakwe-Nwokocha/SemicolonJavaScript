const {AirConditioner} = require('./AirConditioner');

let samsungAC;

beforeEach(() => {
    samsungAC = new AirConditioner();
});

test('Turn on AC: AC is on', () => {
    expect(samsungAC.isOn()).toBe(false);

    samsungAC.toggle();
    expect(samsungAC.isOn()).toBe(true);
});

test('Turn off AC: AC is off', () => {
    expect(samsungAC.isOn()).toBe(false);
    samsungAC.toggle();
    expect(samsungAC.isOn()).toBe(true);

    samsungAC.toggle();
    expect(samsungAC.isOn()).toBe(false);
});

test('Increase AC temperature from 16 to 17: Temperature increases', () => {
    samsungAC.toggle();
    expect(samsungAC.isOn()).toBe(true);
    expect(samsungAC.getTemperature()).toBe(16);

    samsungAC.increaseTemperature();
    expect(samsungAC.getTemperature()).toBe(17);
});

test('Decrease AC temperature from 18 to 17: Temperature decreases', () => {
    samsungAC.toggle();
    expect(samsungAC.isOn()).toBe(true);
    samsungAC.increaseTemperature();
    samsungAC.increaseTemperature();
    expect(samsungAC.getTemperature()).toBe(18);

    samsungAC.decreaseTemperature();
    expect(samsungAC.getTemperature()).toBe(17);
});

test('Increase AC temperature at 30: Temperature remains at 30', () => {
    samsungAC.toggle();
    expect(samsungAC.isOn()).toBe(true);
    expect(samsungAC.getTemperature()).toBe(16);

    for (let count = 0; count < 14; count++) samsungAC.increaseTemperature();
    expect(samsungAC.getTemperature()).toBe(30);

    samsungAC.increaseTemperature();
    expect(samsungAC.getTemperature()).toBe(30);
});

test('Decrease AC temperature at 16: Temperature remains at 16', () => {
    samsungAC.toggle();
    expect(samsungAC.isOn()).toBe(true);
    expect(samsungAC.getTemperature()).toBe(16);

    samsungAC.decreaseTemperature();
    expect(samsungAC.getTemperature()).toBe(16);
});
