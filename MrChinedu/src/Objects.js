let vehicle = {wheels: 4};
let car = {
    seats: 5,
    __proto__: vehicle
};

console.log("car", car, car.__proto__);

function Human(_name, _age) {
    this.name = _name;
    this.age = _age;
}

function Employee(_name, _age, _designation) {
    Human.call(this, _name, _age);
    this.designation = _designation;

    this.setAge = newage => {
        console.log(`setting age from ${this.age} to ${newage}`);
        this.age = newage;
    }
}

let d = new Employee("a", 12, "d")
console.log(d);
d.setAge(15)
console.log(d);
console.log(d.age);
console.log(d.name);

