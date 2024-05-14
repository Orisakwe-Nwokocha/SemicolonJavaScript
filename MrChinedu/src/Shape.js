class Shape {
    constructor(name) {
        this.__name = name;
    }

    get name() {
        return this.__name;
    }
}


module.exports = {Shape};