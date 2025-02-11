// FOREACH FUNCTION

let num=[1,2,3,4,5];
num.forEach((number,index,num)=>{
   console.log(number,index,num);
})

let products=[
  {id:1,name:"product1",price:99},
  {id:2,name:"product2",price:98},
  {id:3,name:"product3",price:97},
  {id:4,name:"product4",price:96}
]
// products.forEach((product)=>{
//    console.log(`Product Id:- ${product.id}`);
//    console.log(`Product Name:- ${product.name}`);
//    console.log(`Product Price:- ${product.price}`);
// })

// MAP FUNCTION(give a new array)
let mapArray=products.map((product)=>{
 console.log(`Product Price:- ${product.price*2}`);
})
console.log(products);

let number=[2,3,4];
let double=number.map((number)=>{
    return number*2;
})
console.log(number);
console.log(double);

// Filter Fuction
let filterproduct=products.filter((product)=>{
   return product.price>97;
})
console.log(filterproduct);

// Reduce Function
let cartTotal=products.reduce((total,product)=>{
   return total+product.price;
},0)
console.log(cartTotal);


