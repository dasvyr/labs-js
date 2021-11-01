
// 1.
// let train = {
//         isLocomotive: true,

//         locomotiveLength: 25,
//         locomotiveColor: "black",
//         isFreightCar: false,

//         freightСarLength: 30,
//         isCoachCar: true,

//         totalCoachCars: 9,
//         coachLength: 20,
// };

// console.log(train.freightСarLength * train.totalCoachCars);
// тут есть какой-то подвох? вероятно, был более хитрый способ это сделать  

// 2.
// let car = {
//     brand: "toyota",
//     color: "black",
//     numberOfDoors: 4,
//     horsepower: 148,
//     engineVolume: 2,
//     transmission: "automatic",
// };
// способ 1:
// let carClone2 = {};

// for (let key in car) {
//     carClone2[key] = car[key];
// }

// console.log(carClone2, car);
// // способ 2:
// let carClone3 = Object.assign({}, car);
// console.log(carClone3);

// 3.
let book = {
     numberOfPages : 545,

     cover  : true,
     isTheAuthorAlive  : false, 
     isBestseller  : true,
     booksEditions  : 20000000,

};
for (let key in book) {
    if (typeof book[key] === 'boolean') {
        console.log(key);
    }
}
