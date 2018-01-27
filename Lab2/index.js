/**
 * Created by xiewangzhi on 27/01/2018.
 */

const geometry = require("./geometry");
const utilities = require("./utilities");

console.log(geometry.surfaceAreaOfRectangularPrism(2,3,4));


console.log(geometry.volumeOfRectangularPrism(2,3,4));


console.log(geometry.volumeOfSphere(2));


console.log(geometry.surfaceAreaOfSphere(2));


const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
console.log(utilities.deepEquality(first, second)); // false
console.log(utilities.deepEquality(first, third)); // true

const arr = [1,1,2,3,3,6];
console.log(utilities.uniqueElements(arr));


const str = "Hello, the pie is in the oven";
console.log(utilities.countOfEachCharacterInString(str));



