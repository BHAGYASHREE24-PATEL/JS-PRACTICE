// Selection And Control Statement

// console.log("Hello World!!");
// if else
let v=23;
if(v>=18){
    console.log("eligible for vode");
    
}else{
    console.log("Not Eligible");
    
}

let tlight="orange";
if(tlight==="red"){
    console.log("STOP"); 
}else if(tlight==="orange"){
    console.log("START");
}else{
    console.log("Go");
}

// switch statement
let light="green";
switch (light) {
    case 'red':
        console.log("STOP");
        break;
    case 'orange':
        console.log("START");
        break;
    default:
        console.log("GO");
        break;
}


// Contro Statement
let n=5;
for(let i=1;i<=n;i++){
    console.log(i);
}

let m=5;
let i1=1;
while (i1<=m) {
    console.log(i1);
    i++ ;  
}


let i=1;
do {
    console.log(i);
    i++;
} while (i<=5);


// Function
function printname() { //Function Declaration
    console.log("Bhagyashree Patel");  
}
printname();//Function Call

function printname(name) { 
    // console.log(name);  
    return name;
}
let ans=printname("Bhagyashree Patel");
console.log(ans);


// Scoping
let a=10;  //Global Scope
function sum() {
    let b=20;       //Block Scope
    console.log(a);
    console.log(b);
}sum();
console.log(a);

//Scoping Chain
var x=30;
function outer() {
    var y=10;
    function inner() {
        var z=20;
        console.log(x,y,z); 
    }inner();
}outer();