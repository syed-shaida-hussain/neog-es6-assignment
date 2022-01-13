    // ES6+ Assignment Questions
    //  commented code is es5 syatax  

    //  Question 1

// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

     // es6 syntax

const aloo = 1;
aloo === 1 ? a = 2 : aloo; //conditional ternary operator
console.log(a)
console.log(aloo);

    //  Question 2

// var multiply = function(x, y) {
//      return x * y;
//   };

    // es6 syntax
const multiply = (x , y) => x * y // Arrow function
console.log(multiply(2,5))

    // Question 3

// var customer = {
//     name: "Bhaalo"
//   };
//   var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
//   };
//   var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"

    // es6 syntax

const customer = {
    name : "Bhaalo"
};
const card = {
    amount : 20,
    product: "Aaalo",
    unitprice: 50
};
const message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece` //Template literals
console.log(message)

    // Question 4 

//  var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];

    //es6 syntax

const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]
const [CEO , , Mentor] =  Neog; //Destructuring an array
console.log(CEO , Mentor)


    // Question 5

// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0];
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

    // es6 syntax

const arr = ["MA", "TA", "PA", "CA"];
const [firstName , surname] = arr
console.log(firstName , surname)

    // Question 6

// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };

    // es6 syntax

const Aaloo = "Tasty";
const Bhaloo = "cute";
const obj = {
    Aaloo,
    Bhaloo
};
console.log(obj)

    //Question 7

// var a1 = 5;
// var b1 = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

    // es6 syntax

const a1 = 5;
const b1 = 10;
console.log(`Fifteen is ${a1+b1} and not ${2 * a1 + b1}.`)

    //Question 8

// var arithmeticsObj = {
//     sum: function sum(num1, num2) {
//         return num1 + num2;
//     },
//     multiply: function multiply(num1, num2) {
//         return num1 * num2;
//     }
//     };

    //es6 syntax

const arithmeticsObj = {
    sum : (num1 , num2) => num1 + num2,
    multiply : (num1 , num2) => num1 * num2
}
console.log(arithmeticsObj.sum(3,5) , arithmeticsObj.multiply(3,5))

    //QUestion 9

// var avengers = {
//     operation: "Assemble",
//     members: [
//         {
//         ironMan: "Tony Stark"
//         },
//         {
//         captainAmerica: "Steve Rogers"
//         },
//         {
//         blackWidow: "Natasha Romanoff"
//         }
//     ]
// };
// var operation = avengers.operation,
// members = avengers.members;

    //es6 syntax

const ironMan = "Tony Stark"
const captainAmerica = "Steve Rogers"
const blackWidow = "Natasha Romanoff"
const avengers = {
    operation : "Assemble",
    members : [
        {
            ironMan
        },
        {
            captainAmerica
        },
        {
            blackWidow
        } 
    ]     
}

const {operation , members} = avengers
console.log(operation , members)

    // Question 10
    // convert from es6 to es5

// const packIt = (...args) => console.log(args)
// packIt(1,2,3,5,5)

    //es5 syntax

function packIt(){
    var array = [];
    for(var i=0; i<arguments.length; i++){
        array.push(arguments[i])
    }
    console.log(array)
}
packIt(1,2,3,4,5)

    //Question 11 
    //Guess the Output 

const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)

//output will be Namaste Welcome

    //Question 12 
    //Guess the output

const obj1 = {
    aloo : 1,
    bhallo : 2
}
const {c : aloo = [2,3,4].push(5),aloo} = obj1 
console.log(aloo)

//error







