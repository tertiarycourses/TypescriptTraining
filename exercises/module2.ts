// Typescript Essential Training
// Module 2: Basics of Typecript
// Author: Dr. Alfred Ang

// Variables and Types
// var a:string = "John"
// var b:number = 50
// var c:number = 42.50
// var d = b + c 
// console.log("a = "+a) 
// console.log("b = "+b) 
// console.log("c = "+c) 
// console.log("d =  "+d)

// Array
// var a:number[] = [2,3,4,5];
// console.log(a[2]);

// var a:string[] = ["1","2","3","4"] 
// console.log(a[0]); 

//If-Else
// var num:number = 12; 
// if (num % 2==0) { 
//    console.log("Even"); 
// } else { 
//    console.log("Odd"); 
// }

// Switch
// var grade:string = 'C';
// switch (grade) {
// 	case 'A': console.log("Well done!");
// 	break;
// 	case 'B': console.log('Good job!');
// 	break;
// 	case 'C': console.log('Work harder next time');
// 	break;
// 	default: console.log('I am not sure your grade');
// }

// For loop
// for( var i:number = 1 ; i < 10 ; i++ ) { 
// 	   		console.log(i);
// } 

// Break and Continue
// for( var i:number = 1 ; i < 10 ; i++ ) { 
// 	   		 if (i % 5 == 0) {
// 	   		 	//break 
// 	   		 	continue
// 	   		 }
// 	   		 console.log(i);
// 		} 

// For-in loop
// var num:number[] = [2,3,4,5];
// for (var i in num) {
// 			console.log(num[i]);}

// While loop
// var i:number = 1; 
// while(i < 10) { 
//    		console.log(i);
//    		i++; 
// 		}

// var i:number = 1; 
// do { 
//    	console.log(i);
//    	i++; 
// 	} while(i<10)

// Function
function f(x:number) {
		return x*x
	}

console.log(f(4))
