// STRING
let s1='Bhagyashree Patel';
let s2=`Bhagyashree Patel`;
let s3="Bhagyashree Patel";
console.log(s1,s2,s3);


for (i=0;i<s2.length;i++){
    console.log(s2[i]);
    
}

// console.log(s1[0]);
// or
console.log(s1.charAt(0));

let fname="Shree";
let lname="Patel";
let age=22;
// console.log(fname + " "  +lname); or
let details=`My name is:${fname} ${lname}`
console.log(details);
console.log(details.toUpperCase());
console.log(details.toLowerCase());


let s4="My name is shree. I am from Sundargarh.I completed my bsc from gacr and currently pursuing mca from kiit"
console.log(s4);


// SEARCH
let keyword="mca";
console.log(s4.search(keyword));

// REPLACE
let key="Sundargarh";
let replacekey="Odisha";
console.log(s4.replace(key,replacekey));

// SUBSTR
console.log(s4.substring(11,16));

// substring
console.log(s4.substring(11,16));

// SLICE
console.log(s4.slice(11,16));



