
// 1.
function howManyDays(month) {
	let days;
	switch (month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return days = 31;
		case 4:
		case 6:
		case 9:
		case 11:
			return days = 30;
		case 2:
			return days = 28;
		default:
			console.log("нет такого месяца");
		
	}
}

console.log (howManyDays(5789));
