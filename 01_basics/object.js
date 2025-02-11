let student={
  name:"Bhagyashree Patel",
  roll:114,
  section:"A",
  getDetails:function() {
    console.log("Details"); 
  },
  arr:[90,30,"Shree",12]
};
// console.log(student);
// console.log(student.getDetails());
// console.log(student.arr[2]);

// UPDATE
student.age=33;
console.log(student);

// INSERT
student.IsMarried=false;
console.log(student);

// ACCESS
console.log(student.$roll);

// DELETE
delete student.arr;
console.log(student);

// ITERATE
for(let obj in student){
   console.log(obj+ " :"+student[obj]);
   
}