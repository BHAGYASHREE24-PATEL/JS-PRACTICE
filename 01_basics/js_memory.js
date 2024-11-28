// Two Type of Memory in Java Script
// 1.Stack(Primitive)
// 2.Heap(Reference/Non-Primitive)

// STACK
// let my_mail="tiki@gmail.com"
// your_mail=my_mail
// your_mail="your_name@gmail.com"

// console.log(my_mail)
// console.log(your_mail)

// HEAP

let user1={
    email:"Tiki@gmail.com"
}
let user2=user1
user2.email="Shree@gmail.com"

console.log(user1)
console.log(user2)