let vowels = ["a", "e", "i", "o", "u"];
let s = "eight";
console.log(s.slice(0, 1));
let n = s.slice(0, 1) + s.slice(1) + "way";
console.log(n);
console.log(vowels.includes(s[0]));
let h = "glove";
let k = h.replace(/([a-z])/g, "$1 ")
    .trim()
    .split(" ");
function check(str) {
    for (let i = 0; i < str.length; i++) if (vowels.includes(str[i])) return i;
    return -1;
}
let index = check(k);
console.log(index);
console.log(k);
console.log(h.slice(index) + h.slice(0, index) + "ay" );
console.log(vowels.includes(k));