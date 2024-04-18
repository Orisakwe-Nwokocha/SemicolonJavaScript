// var num = 5
// console.log(num)
// var num = 7
// console.log(num)
// let num = 5
// console.log(num)
// num = 7
// console.log(num)
// console.log(typeof num)
// console.log(typeof null)

let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(number)
number.push(8)
console.log(number)
number.pop()
console.log(number)
number.shift()
console.log(number)
number.unshift(10)
console.log(number)
console.log(number);
number.slice();
console.log(number.slice(-2));
console.log( array = number.splice(2, 1, 2, 3))
console.log(number)
console.log(array)
array.concat(number)
console.log(number)
console.log(array)

let arr = [["Car", 2000], ["Truck", 500], ["Bike", 6500]]
console.log(arr)
console.log(arr.slice(0, 1));
console.log(arr[0][0]);
arr.push(["Scooter", 1500]);
console.log(arr)
arr[0].push(["Toyota", "Nissan"])
arr[1].push(["Ford"])
arr[2].push(["Honda"])
console.log(arr)
console.log(arr[0][2][1])

let multi_array = [[200, 50, 300, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]]
console.log(multi_array)
let secondRowLength = multi_array[1].length;
console.log(multi_array[1].slice(0, secondRowLength - 1));


let user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    sex: "male"
}

for (const key in user) console.log(`${key}:`, user[key]);
for (const numberKey in number) console.log(number[numberKey]);
for (const value of number) console.log(value);

let raw_array = [
    [null,
        {name: "Nigeria", population: 1, temp: 10, currency: "Naira"},
        {name: "Nigeria", population: 12, temp: 5, currency: "Naira"},
        {name: "Nigeria", population: 15, temp: 40, currency: "Naira"}
    ],
    [
        {name: "Nigeria", population: 2, temp: 12, currency: "Naira"},
        {name: "Nigeria", population: 1, temp: 9, currency: "Naira"},
        {name: "Nigeria", population: 12, temp: 35, currency: "Naira"},
        null
    ],
    [
        {name: "Nigeria", population: 2, temp: 7, currency: "Naira"},
        null,
        {name: "Nigeria", population: 6, temp: 56, currency: "Naira"},
        {name: "Nigeria", population: 9, temp: 2, currency: "Naira"}
    ]
]

let sum = 0;

raw_array.forEach(array => {
    for (const key of array) if (key != null && key.temp <= 10) sum += key.population;
});
console.log(sum);
sum = 0;
raw_array.forEach((array) => {
    const a = array.reduce((acc, obj) => {
        if (obj != null && obj.temp <= 10) acc += obj.population;
        return acc;
    }, 0);
    sum += a;
});

console.log("Sum of total population:", sum)
