// 1.

// let cat = { name: "cat", legs: 4, color: "black" };
// function animal(obj){
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs`
// }
// console.log(animal(cat));
// 2.


function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


