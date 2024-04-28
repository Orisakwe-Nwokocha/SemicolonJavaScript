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