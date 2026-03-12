let months = "May";

switch (months) {

    case "january":
        console.log("New year's day");
        break;

    case "february":
        console.log("Heroe's day");
        break;

    case "March":
        console.log("Women's day");
        break;

    case "April":
        console.log("Memorial day");
        break;

    case "May":
        console.log("Independence day");
        break;

    case "june":
        console.log("Labor day");
        break;

    case "july":
        console.log("")
        break;

    default: console.log("Invalid month");
}

function greet() {

    console.log("hello")
}
let result = greet();
console.log(result);
//reverse
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("honore"));
//Max
function maxInArray(array) {
    return Math.max(...array);
}
console.log(maxInArray([3, 5, 7, 2, 8]));
// vowel
function vowel(vow) {
    return (vow.match(/[aeiou]/gi) || []).length;
}
console.log(vowel("honoreeouaoeu"));
// Odd or Even
function on(a) {
    return a % 2 === 0;
}
console.log(on(4));
console.log(on(5));
// max
function array(arr) {
    return Math.max(...arr);
}
console.log(array([1, 2, 3, 4, 5, 6, 7, 123]));
// power
function power(base, power) {

    return base ** power;
}
console.log(power(5, 2));