// Array
 let a=[1,2,3,4,5,6,7,8,9,10];
 console.log(a);
 console.log(a[2]);

let players = [
{ name: "A", score: 1 },
{ name: "B", score: 2 },
{ name: "C", score: 3 },
{ name: "D", score: 4 },
{ name: "E", score: 5 },
{ name: "F", score: 6 }
];
console.log(players[1]);//Extract any particular value
console.log(players.length);
// console.log(players);

for (let i = 0; i < players.length; i++) {
   console.log(players[i]);  
}


// METHODS
// Push(add object)//add element in the last
players.push({name:"G" , score:7});
console.log(players);

// POP
players.pop({name:"G",score:7});
console.log(players);

// Unshift(add the element in the first)
players.unshift({name:"A",score:44});
console.log(players);

// Shift
players.shift();
console.log(players);

// Slice
let play=players.slice(0,3);
console.log(play);

// Splish
players.splice(0,2,{name:"Z",score:22});
console.log(players);

// Reverse element
console.log(players.reverse());

//  some and every
let info=players.every(function (obj) {
    if (obj.score>5) {
        return true;
    }else{
        return false;
    }
});
console.log(info);


// find
let infor=players.find(function (obj) {
    return obj.score===5;
});
console.log(infor);

// Sort
let ar=[1,4,3,6,2,5,102,104,1000];
console.log(ar.sort());


console.log(ar.sort(function(a,b){

    return a-b;
}));


// delete
delete ar[2];
console.log(ar);
