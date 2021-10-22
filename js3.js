
// 1.
// function howManyDays(month) {
// 	let days;
// 	switch (month) {
// 		case 1:
// 		case 3:
// 		case 5:
// 		case 7:
// 		case 8:
// 		case 10:
// 		case 12:
// 			return days = 31;
// 		case 4:
// 		case 6:
// 		case 9:
// 		case 11:
// 			return days = 30;
// 		case 2:
// 			return days = 28;
// 		default:
// 			console.log(0);
		
// 	}
// }

// console.log (howManyDays(5789));

// 2.

// function max(a, b) {
// 	return a > b ? a : b;
// }
// console.log(max(40, 10));

// или: 

// function max(a, b) {
// 	let maxNumber = a > b ? a : b;
// 	return maxNumber;
// }
// console.log(max(4, 10));

// 3.

// function pow(x, n) {
// 	if (n <= 0) {
// 		return
// 	}
// 	let degree = x ** n;
// 	return degree;
// }
// console.log(pow(2, 2));

// 4. 

// function calcMultiplication(numOne, numTwo, fun1, fun2) {
// 	let multi = numOne * numTwo;
// 	if (multi % 2 === 0) {
// 		fun2();
// 	}
// 	else {
// 		fun1();
// 	}
// }

// function oddNum() {
// 	console.log("нечетное");
// }

// function evenNum() {
// 	console.log("четное");
// }

// calcMultiplication(2, 3, oddNum, evenNum);
