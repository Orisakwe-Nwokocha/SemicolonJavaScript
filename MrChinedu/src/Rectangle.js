const {Shape} = require('./Shape')


class Rectangle extends Shape {
    constructor(name, side1, side2) {
        super(name);
        this.__side1 = side1;
        this.__side2 = side2;
    }

    setSide1(side1) {
        this.__side1 = side1;
    }

    setSide2(side2) {
        this.__side2 = side2;
    }

    getArea() {
        return this.__side1 * this.__side2;
    }

    isSquare() {
        return this.__side1 === this.__side2;
    }

}


const rectangle = new Rectangle("Rectangle", 14, 6);
console.log("object:", rectangle);
console.log("name:", rectangle.name);
console.log("area:", rectangle.getArea());
console.log("isSquare:", rectangle.isSquare());


module.exports = {Rectangle};