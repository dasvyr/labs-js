
// 1.

// let year = +prompt ("Введите год");

// if (year < 2011) {
// 	alert ("Статистика еще не велась");
// } else if (year === 2022) {
// 	alert ("Сезон еще идёт");
// } else if (year > 2022) {
// 	alert ("Всё лучшее впереди");
// } else if (year === 2015 || year === 2017) {
// 	alert ("Победитель ФК 'Челси'");
// } else if (year === 2012 || year === 2014 || year === 2018 || year === 2019 || year === 2021) {
// 	alert ("Победитель ФК 'Манчестер Сити'");
// } else if (year === 2011 || year === 2013) {
// 	alert ("Победитель 'Манчестер Юнайтед'");
// } else if (year === 2020) {
// 	alert ("Победитель 'Ливерпуль'");
// } else if (year === 2016) {
// 	alert ("Победитель 'Лестер Сити'"); 
// } else alert("Попробуйте еще раз");
 

// 2. 


// for (let n = 7; n <= 15; n++) {
// 	if (n == 8) continue; //Вероятно, есть более изящный способ вывести неяетные числа, но придумалось только это
// 	if (n == 10) continue;
//  	if (n == 12) break;
//  	alert (n);
// }
// alert ("12. Цикл прерван");


// 3. 

// for (let j = 0; j < 5; j++) { 

//          alert( `number ${j}!` ); 
//       }

let j = 0;
while (j < 5) {
	j++;
	alert (`number ${j}!`);
}
