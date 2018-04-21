// Typescript Essential Training
// Module 3: Typecript ES6 Features
// Author: Dr. Alfred Ang

// Tuple
// var a = [1,"a"]
// console.log(a[0])

// Push & Pull
// a.push(3)
// console.log(a)

// a.pop()
// console.log(a)

// enum Color {Red=2, Green=4, Blue=6}
// var c: Color = Color.Green
// console.log(c)

var a: any = 4
a = "maybe a string instead"
a = false


// Var vs Let
// var x:number = 10;

// if (x>1) {
// 	// var x = 4
// 	let x = 4;
// }

// console.log(x)

// for (var x:number = 0; x<5; x++) {
// 		setTimeout(()=>console.log(x), 0)
// }

// for (let x:number = 0; x<5; x++) {
// 		setTimeout(()=>console.log(x), 0)
// }

// Const
// var x:number = 1;
//const x:number = 1;
// x = 2;
// console.log(x);

// For-Of
// var num:number[] = [2,3,4,5];
// for (var i of num) {
// 	console.log(i);
// 		}

// Ex: Template Literal
// var a:string = 'Samantha'
// var b:number = 22
// console.log(`hello my name is ${a}, and I am ${b} years old`);

// Ex: Template Literal
// function createMail(n,p) {
// 	console.log(`
// 	Hi ${n}, Thanks for buying from us!
// 			Total: $${p}
// 			Shipping: $5.95
// 			Grand Total: $${p+5.95}`
// 		)
// 		}

// createMail("Gina",100)


// Spread Operator
// var a:number[] = [4,5,6]
// var b:number[] = [1,2,3,...a,7,8,9]
// console.log(b)

// Ex: Spread Operator
// var cats:string[] = ["Tabby", "Siamese", "Persian"];
// var dogs:string[] = ["Golden Retriever", "Pug"];

// var animals:string[]  = [...cats, ...dogs];

// console.log(animals);

// Default Function Parameters
// function f(x:number=10,y:number=20) { 
//    		return x+y
// 		} 

// console.log(f(3,4))
// console.log(f(3))
// console.log(f())

// Rest Parameters
// function add(...a) {
// 	var sum:number = 0
// 	for (var i of a) {
// 		sum = sum + i
// 		}
// 	return sum
// 	}

// console.log(add(1,2,3,4,5,6))

// Ex: Rest Parameters
// function min(a,...b) {
// 	var min:number = a;
// 	for (var i of b) {
// 		if (b[i]<min) {
// 			min = b[i];
// 			}
// 		}
// 		return min;

// 	}

// console.log(min(7,2,3,8))

// Anonymous Function
// function () {
// 			return 'programming'
// 			}

// Object Literals
// var persons = {
// 	name: 'Alfred',
// 	body: {
// 			height:170,
// 			weight: 70
// 			},
// 	hobby: function () {
// 			return 'programming'
// 			}
// 		}

// var p1 = persons
// console.log(p1.hobby())


// Arrow Function
// var f = (x:number, y:number) => x+y;

// console.log(f(3,4))

// var a:number[] = [4,5,6,7,-2,8,-3,9,10]
// console.log(a.filter( x => x>5))

// E: Arrow Function
// var add = (...x) => {
// 	var sum = 0;
// 	for (let i of x) {
// 		sum = sum+i;
// 	}
// 	console.log(sum);
// }

// add(4,5,6,7)

// Destructring Array
// var [first,,,forth] = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"]
// console.log(first)
// console.log(forth)

// Destructring Object
// const person = {  
//   	name_: 'Luke',
//   	age: '24',
//   	facts: {
//     	hobby: 'Photo',
//     	work: 'Software Developer'
//   	}
//   }
// const {name_, age} = person
// console.log(name_, age)

// Ex: Destructing Object
// var vacation = {
// 	destination: "Chile",
// 	travelers: 2,
// 	activity: "skiing", 
// 	cost: 4000
// };

// function vacationMarketing({destination, activity}) {
// 	return `Come to ${destination} and do some ${activity}`
// }

// console.log(vacationMarketing(vacation));