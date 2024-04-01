// Day 26 Challenge: Start Coding!
// Question 76: 
function twoParameters(num1:number , num2:number) : number{
    return  num1 + num2; //add two number
}

console.log(twoParameters(4,8));

// Question 77: 


function greet(name:string = "anonymous") {
    console.log(`hello :${name}`);
}    

greet(); 
greet("Aliza");


// Question 78: 
function squaringNumber(num1:number) {
    return num1 **2;
    
}
const squareNumber = function(numb: number): number {
    return numb* numb;
};
console.log(squareNumber(4));
console.log(squaringNumber(4));

