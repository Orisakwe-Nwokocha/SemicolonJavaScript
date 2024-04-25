let vehicle = {wheels: 4};
let car = {
    seats: 5,
    __proto__: vehicle,
    wheels: 6
};

console.log("vehicle", vehicle, vehicle.__proto__);
console.log("car", car);
console.log("car", car, car.__proto__);
console.log("car wheels", car.wheels);


function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayName = () => {
        console.log("name", this.name);
    }
}

const person = new Person("D", 12);
console.log(person);
console.log(new Person("Person 2", 25));
person.sayName();


const json = '{"result": true, "count": 42}';
console.log(json);
const obj = JSON.parse(json);
console.log(obj);

console.log("person as json", person);
console.log("person as string", JSON.stringify(person));



class Dayo {
    constructor(name, age, size) {
        this._name = name;
        this.age = age;
        this.size = size;
    }

    getName() {
        return this._name;
    }

    static setName(newName) {
        this._name = newName;
    }

    setAge(newAge) {
        this.age = newAge;
    }

    getAge() {
        return this.age;
    }

    getSize() {
        return this.size;
    }

    setSize(newSize) {
        this.size = newSize;
    }
}

let dayo = new Dayo("d", 12, 17);
console.log(dayo);

