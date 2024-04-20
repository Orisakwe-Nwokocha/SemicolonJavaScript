class AirConditioner {
    constructor() {
        this._isOn = false;
        this._temperature = 16;
    }

    isOn() {
        return this._isOn;
    }

    toggle() {
        this._isOn = !this._isOn;
    }

    getTemperature() {
        return this._temperature;
    }

    increaseTemperature() {
        const temperatureIsWithinRange = this._temperature >= 16 && this._temperature < 30;
        if (this._isOn && temperatureIsWithinRange) this._temperature++;
    }

    decreaseTemperature() {
        const temperatureIsWithinRange = this._temperature > 16 && this._temperature <= 30;
        if (this._isOn && temperatureIsWithinRange) this._temperature--;
    }
}


module.exports = { AirConditioner };