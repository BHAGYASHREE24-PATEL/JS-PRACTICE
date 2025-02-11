// console.log("Hello World!!","Bhagyashree Patel",22);


// VARIABLE
let a=10;
var b=20;
const c=30;
console.log(a,b,c);

// DATA TYPES 7 TYPE
// Premetive Data Type

let k=90; //Number
let l="Shree";//String
let m=true;//Boolean
let n; //undefined 
let o=null;
let p=BigInt(12333224444321);
let q=Symbol("hello");

console.log(typeof k,typeof l,typeof m,typeof n,typeof o,typeof p,typeof q);


// objects
let person={
    firstName:'Shree',
    lastName:'Patel',
    age:22,
    IsMarried:false,
};

person.company="Infosys";//add more one property
person.age=23;//Upadte the information
console.log(person.age);//print single information
console.log(person);


// OPERATORS
// Arithmatic Operator
let arithmatic={
 x:1+2,
 y:2-1,
 z:5*4,
 r:20/4,
 s:6%4,
 u:4**5
};
console.log(arithmatic);

// Assignment Operator
let x=10;
x+=2;
let y=10;
y-=3;
let z=10;
z*=3;
let r=10;
r%=6;
console.log(x,y,z,r);

// Comparision Operator
console.log(3==4); //Equality Operator
console.log(3===4);//Scrictly Equality Operator
console.log(3!=4);
console.log(3<4);
console.log(3<=3);
console.log(4>5);
console.log(4>=4);

//Logical Operator
console.log(3<4 && 4>5);
console.log(3<4 || 3<2);
console.log(!true);

// Type Conversion
// a)Implict type conversion
 console.log(35+"hello");
 console.log(35+"23");

//  Explictly type conversion
let v=40;
let s=String(a);

console.log(typeof s);



 



  





