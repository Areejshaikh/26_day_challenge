// Day 26 Challenge: Start Coding!
// Question 76: 
function twoParameters(num1, num2) {
    return num1 + num2; //add two number
}
console.log(twoParameters(4, 8));
// Question 77: 
function greet(name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("hello :".concat(name));
}
greet();
greet("Aliza");
// Question 78: 
function squaringNumber(num1) {
    return Math.pow(num1, 2);
}
var squareNumber = function (numb) {
    return numb * numb;
};
console.log(squareNumber(4));
console.log(squaringNumber(4));
