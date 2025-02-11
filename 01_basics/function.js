function addToCart(product){
   console.log(`Product ${product} is added in the cart`);
}

addToCart("pen");
addToCart("pencil");
addToCart("rubber");


// Anonymous Function
let add=function(){
    console.log(3+5);
}
add();

// Higher Order Function

function getCaptured(capture){
    capture();
}
getCaptured(function(){
    console.log("My Name is Bhagyashree Patel");
    
});


function returnFunctioon(){
    return function(){
        console.log("Hi");
    }
}
returnFunctioon()();


function calculator(operation, initialValue, numbers) {
    let total=initialValue;
    for(const number of numbers){
        total=operation(total,number)
    }
    return total;
}
function sum(n1,n2){
    return n1+n2;
}
function mul(n1,n2){
    return n1*n2;
}
function sub(n1,n2){
    return n1-n2;
}
function div(n1,n2){
    return n1/n2;
}

calculator(sum,0,[1,2,3,4,5]);
calculator(mul,0,[1,2,3,4,5]);
calculator(sub,0,[1,2,3,4,5]);
calculator(div,0,[1,2,3,4,5]);


// ARROW FUNCTION

// function hello(){
//     console.log("Hello");
// }
// hello();

let hello=()=>{
   console.log("Hello");
   
}
hello();

let addition=(a,b)=>a+b;
// or {
//     return a+b;
// }
let ans=addition(3,7);
console.log(ans);



// IIFE
(function sum(){
console.log(3+9);
})()
// or

// (()=>{
//     console.log(3+9);
// })()


let a=10;
function hlo(){
    a=20;
    console.log(a);    
}
hlo();
console.log(a);


//  EXECUTION C0NTEXT
// A)Global Execution Context
let l=3;
let w=4;
function cal(length,width){
    var area=length*width;
    return area;
}
var rect=cal(l,w);
console.log(rect);



// B)Function Execution Context