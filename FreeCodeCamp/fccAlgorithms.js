function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    return newArr.filter(element => !arr1.includes(element) || !arr2.includes(element));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
                      ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = 0;
    for (let i = min; i <= max; i++) sum += i;
    return sum;
}

console.log(sumAll([-1, 4]));
console.log(sumAll([10, 5]));

function destroyer(arr) {
    const valuesToRemove = Array.from(arguments).slice(1);
    return arr.filter(element => !valuesToRemove.includes(element));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


function whatIsInAName(collection, source) {
    let result = [];
    collection.forEach(obj => {
        let sourceArr = [];
        for (const key in source) sourceArr.push(key);
        let counter = 0;
        for (const key in obj) if (obj[key] === source[key]) counter++;
        if (counter === sourceArr.length && !result.includes(obj)) result.push(obj);

    });
    return result;
}

let collection = [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }];
console.log(whatIsInAName(collection, { last: "Capulet" }));

collection = [
    { "apple": 1, "bat": 2 },
    { "bat": 2 },
    { "apple": 1, "bat": 2, "cookie": 2 }];
console.log(whatIsInAName(collection, { "apple": 1, "bat": 2 }));


function spinalCase(str) {
    return str
        .replace(/[^a-zA-Z0-9]/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .split(" ")
        .join("-")
        .toLowerCase();
}

console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('This Is Spinal Tap'));


function translatePigLatin(str) {
    str = str.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(str[0])) return str + "way";

    let split = str
        .replace(/([a-z])/g, "$1 ")
        .trim()
        .split(" ");

    function findFirstVowelIndex(split) {
        for (let index = 0; index < split.length; index++) if (vowels.includes(split[index])) return index;
        return -1;
    }

    let index = findFirstVowelIndex(split);
    if (index === -1) return str + "ay";
    return str.slice(index) + str.slice(0, index) + "ay";
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("rhythm"));


function myReplace(str, before, after) {
    if (before[0].match(/[A-Z]/)) after = after[0].toUpperCase() + after.slice(1);
    else after = after[0].toLowerCase() + after.slice(1);
    return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
console.log(myReplace("I think we should look up there", "up", "Down"));


/**
 * First try

function pairElement(str) {
    let split = str.replace(/([A-Z])/g, "$1 ").trim().split(" ");
    let  output = [];
    split.forEach(char => {
        switch (char) {
            case "A":
                output.push([char, "T"]);
                break;
            case "T":
                output.push([char, "A"]);
                break;
            case "C":
                output.push([char, "G"]);
                break;
            case "G":
                output.push([char, "C"]);
                break;
        }
    })
    return output;
}*/

// second try
function pairElement(str) {
    const chars = str.split("");
    const basePairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };

    return chars.map(char => [char, basePairs[char]]);
}

console.log(pairElement("GCG"));


/**
 *  first try

function fearNotLetter(str) {
    let alphabets = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];

    const getIndex = alphabets.findIndex(char => char === str[0]);
    let counter = 0;
    for (let index = getIndex; index < alphabets.length; index++) {
        if (alphabets[index] !== str[counter++]) return alphabets[index];
        if (counter === str.length) break;
    }
}
 */

// second try
function fearNotLetter(str) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";

    const startIndex = alphabets.indexOf(str[0]);
    for (let index = 0; index < str.length; index++)
        if (str[index] !== alphabets[startIndex + index]) return alphabets[startIndex + index];
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));


function uniteUnique(arr) {
    const otherArgs = Array.from(arguments);
    let result = [];
    otherArgs.forEach(array => {
        array.forEach(element => {
            if (!result.includes(element)) result.push(element);
        });
    });
    return result;
}

/**
 *  Using set to sort the unique elements

function uniteUnique(arr) {
    const otherArgs = Array.from(arguments);
    let result = [];
    otherArgs.forEach(array => result = result.concat(array));

    return Array.from(new Set(result));
}*/


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));


function convertHTML(str) {
    const htmlPairs = {
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': "&quot;",
        '\'': "&apos;"
    }

    return str
        .split("")
        .map(char => htmlPairs[char] || char)
        .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));


function rot13(str) {
    return str.split("").map(character => {
        if (!character.match(/[a-zA-Z]/)) return character;

        let codePoint = character.codePointAt(0);
        let isAfterM = (/^[a-z]/.test(character) && codePoint > 109) || (/^[A-Z]/.test(character) && codePoint > 77);
        codePoint = isAfterM ? codePoint - 13 : codePoint + 13;

        return String.fromCodePoint(codePoint);
    }).join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SeRr PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));


function sumFibs(num) {
    let series = 1;
    let previousSum = 1;
    let result = 1;

    for (let i = 0; i < num; i++) {
        if (series % 2 !== 0 && series <= num) result += series;
        series += previousSum;
        previousSum = series - previousSum;
    }

    return result;
}

console.log(sumFibs(4));
console.log(sumFibs(9));
console.log(sumFibs(4000000));


function sumPrimes(num) {
    if (num <= 1) return 0;

    const isPrime = number => {
        if (number <= 3) return true;
        for (let i = 2; i < number; i++) if (number % i === 0) return false;
        return true;
    }

    let result = 0;
    for (let number = 2; number <= num; number++) if (isPrime(number) && number <= num) result += number;

    return result;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));


function smallestCommons(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let rangeOfNumbers = [];
    for (let i = min; i <= max; i++) rangeOfNumbers.push(i);

    function isDivisible(number) {
        for (let num of rangeOfNumbers) if (number % num !== 0) return false;
        return true;
    }
    for (let number = min; ; number++) if (isDivisible(number)) return number;
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([23, 18]));


function dropElements(arr, func) {
    const sliceIndex = () =>{
        for (let index = 0; index < arr.length; index++) if (func(arr[index])) return index;
        return -1;
    }
    let index = sliceIndex();

    return index === - 1 ? [] : arr.splice(index);
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}))


function steamrollArray(arr) {
    let output = [];
    for (const element of arr) {
        if (Array.isArray(element)) {
            let subArray = steamrollArray(element);
            output = output.concat(subArray);
            continue;
        }
        output.push(element);
    }
    return output;
}

console.log(steamrollArray([1, [2], {}, [3, [[4]]]]));


function binaryAgent(str) {
    function toDecimalFrom(binary) {
        let decimal = 0;
        let power = 0;
        for (let index = binary.length - 1; index >=0; index--) {
            let digit = parseInt(binary[index]);
            decimal += digit * Math.pow(2, power);
            power++;
        }
        return decimal;
    }


    return str.split(" ")
        .map(binary => {
            let codePoint = toDecimalFrom(binary);
            return String.fromCodePoint(codePoint);
        })
        .join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));


function truthCheck(collection, pre) {
    let counter = 0;
    collection.forEach((item) => {
        for (const key in item) if (key === pre && Boolean(item[key])) counter++;
    });

    return collection.length === counter;
}


console.log(truthCheck([
    {name: "Quincy", role: "Founder", isBot: false},
    {name: "Naomi", role: "", isBot: false},
    {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
console.log(truthCheck([
    {name: "Pikachu", number: 25, caught: 3},
    {name: "Togepi", number: 175, caught: 1},
    {name: "MissingNo", number: NaN, caught: 0}], "number"));
console.log(truthCheck([
    {name: "Pikachu", number: 25, caught: 3},
    {name: "Togepi", number: 175, caught: 1}], "number"));


function addTogether() {
    const [first, second] = arguments;
    if (arguments.length === 1 && Number.isFinite(first))
        return (second) => addTogether(first, second);

    return typeof first === 'number' && typeof second === 'number' ? first + second : undefined;
}

console.log(addTogether(5));
console.log(addTogether(5)(7));
console.log(addTogether("2",3));
console.log(addTogether(2,3));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether("5"));


const Person = function(first, last) {
    let firstName = first;
    let lastName = last;

    this.setFirstName = (first) => firstName = first;
    this.getFirstName = () => {
        return firstName;
    };

    this.setLastName = (last) => lastName = last;
    this.getLastName = () => {
        return lastName;
    };

    this.setFullName = (first, last) => {
        firstName = first;
        lastName = last;
    };
    this.getFullName = () => {
        return firstName + " " + lastName;
    };
};

let bob = new Person("Bob", "Ross");
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(Object.keys(bob).length);


function telephoneCheck(str) {
    str = str.replaceAll(" ", "");
    let regex = /^1?((\(\d{3}\))|\d{3})-?\d{3}-?\d{4}$/;
    return regex.test(str);
}

console.log(telephoneCheck("11 555 555 5555"));


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    const result = [];
    arr.forEach(satellite => {
        const semiMajorAxis = earthRadius + satellite.avgAlt;

        const T = 2 * Math.PI * Math.sqrt((Math.pow(semiMajorAxis, 3)) / GM);
        const orbitalPeriod = Math.round(T);

        result.push({ name: satellite.name, orbitalPeriod });
    });

    return result;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


function checkCashRegister(price, cash, cid) {
    let changeNeeded = cash - price;
    let totalCID = 0;

    for (let currency of cid) totalCID += currency[1];

    if (totalCID < changeNeeded) return {status: "INSUFFICIENT_FUNDS", change: []}
    else if (totalCID === changeNeeded) return {status: "CLOSED", change: cid};

    const currencyUnitValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let change = [];
    for (let index = cid.length -1; index >=0; index--) {
        const currencyName = cid[index][0];
        const currencyValue = currencyUnitValues[currencyName];
        let currencyAmount = cid[index][1];
        let currencyCount = 0;

        while (changeNeeded >= currencyValue && currencyAmount > 0) {
            changeNeeded -= currencyValue;
            changeNeeded = Math.round(changeNeeded * 100) / 100;
            currencyAmount -= currencyValue;
            currencyCount += currencyValue;
        }

        if (currencyCount > 0) change.push([currencyName, currencyCount]);
    }

    if (changeNeeded > 0) return {status: "INSUFFICIENT_FUNDS", change: []};

    return {status: "OPEN", change: change};
}

console.log(checkCashRegister(19.5, 20,
    [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
        ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20,
    [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
        ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(3.26, 100,
    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
        ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


function convertToRoman(num) {
    const symbols = ["I", "IV", "V", "IX", "X", "XL",
        "L", "XC", "C", "CD", "D", "CM", "M"];
    const values = [1, 4, 5, 9, 10, 40, 50, 90, 100,
        400, 500, 900, 1000];

    let result = "";
    let index = symbols.length - 1;

    while (num > 0) {
        while (num >= values[index]) {
            result += symbols[index];
            num -= values[index];
        }

        index--
    }
    return result;
}

console.log(convertToRoman(1200));


function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return str === str.split("").reverse().join("");
}


console.log(palindrome("not a palindrome"));
console.log(palindrome("RaceCar"));