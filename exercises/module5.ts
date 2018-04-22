// Typescript Essential Training
// Module 5: Namespace & Modules
// Author: Dr. Alfred Ang

//Namespace
// namespace AA { 

//    export interface Person { 
//    	name:string
//    	height:number
// 	} 

//    export class Rect {

// 	length:number
// 	width:number

// 	constructor(length,width){
// 			this.length = length;
// 			this.width = width;}
// 	area() { 
// 		return this.length*this.width
// 		}
// 	}
// }

// namespace BB { 

//   export interface Person { 
//    	name:string
// 	} 

// }


// let p1:AA.Person = {
// 	name: 'Ally',
// 	height: 170}

// let p2:BB.Person = {
// 	name: 'Ally'}

// console.log(p1.name)
// console.log(p2.name)


// Import & Export
import { square, diag } from './lib';
console.log(square(11)); 
console.log(diag(4, 3)); 

// import * as lib from './lib';
// console.log(lib.square(11)); 
