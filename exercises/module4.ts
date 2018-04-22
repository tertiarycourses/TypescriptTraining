
// Typescript Essential Training
// Module 4: Class and Interface
// Author: Dr. Alfred Ang

// Class and Object
// class Rect {

// 	length:number
// 	width:number

// 	constructor(length,width){
// 			this.length = length;
// 			this.width = width;}
// 	area() { 
// 		return this.length*this.width
// 	}
// }

// var r1 = new Rect(5,4)
// console.log(r1.area())

// Ex: Class and Objects
// class Person {
// 	name:string
// 	height:number

// 	constructor(name,height){
// 		this.name = name
// 		this.height = height
// 	}

// 	info() {
// 		console.log(`${this.name} height is ${this.height} cm`);
// 	}
// }

// var p1 = new Person("Ally",170);
// p1.info();

// Inheritance
// class Sq extends Rect {
// 	constructor(length) {
// 		super(length,length)
// 	}
// }

// var s1 = new Sq(5)
// console.log(s1.area())

// Ex: Inheritance
// class Student extends Person {

// 	grade:number

// 	constructor(name,height,grade) {
// 		super(name,height);
// 		this.grade = grade;
// 	}

// 	result() {
// 		console.log(`${this.name} grade is ${this.grade}`)
// }
// }

// var p1 = new Student("Ally",170,3.5);
// p1.info();
// p1.result()

// Variable Modifier
class Person {

	static pax:number = 0 
	public name:string
	public height:number

	constructor(name,height){
		this.name = name
		this.height = height
		Person.pax = Person.pax + 1
	}

	info() {
		console.log(`${this.name} height is ${this.height} cm`);
	}

	numPax() {
		console.log(Person.pax)
	}
}

let p1 = new Person('Alfred',170)
let bp2 = new Person('Ally',160)
p1.numPax()

// Exercise: Modifier
// class Employee {

// 	static empCount:number = 0

// 	public name:string
// 	public salary:number

// 	constructor(name:string, salary:number) {
// 		this.name = name
// 		this.salary = salary
// 		Employee.empCount = Employee.empCount + 1
// 	}

// 	dispEmpInfo() {
// 		console.log(`${this.name} salary is $${this.salary}`)
// 	}

// 	dispEmpCount() {
// 		console.log(Employee.empCount)
// 	}
// }

// let e1 = new Employee('Ally',34)
// let e2 = new Employee('Belinda',45)

// e1.dispEmpInfo()
// e1.dispEmpCount()


// Interface
// interface Rect {
//     length: number,
//     width: number
// }

// function area(r: Rect) {
//     return r.length*r.width
// }

// let r1 = {length:10,width:30
// }

// console.log(area(r1))

// Ex: Console
// interface Person { 
//    name:string,
//    height:number
// } 

// function info(p1:Person) {
//  		console.log(`${p1.name} height is ${p1.height} cm`);
// }

// let p1 = {name: 'Ally',height: 170}

// info(p1)

