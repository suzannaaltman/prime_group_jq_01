function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var banana = {
	"name": "banana aka. \" bananna \"",
	"price": 4.00,
	"numPurchased": 0
}

var apple = {
	"name": "apple",
	"price": 2.50,
	"numPurchased": 0
}

var orange = {
	"name": "orange",
	"price": 9.50,
	"numPurchased": 0
}

var grape = {
	"name": "grape",
	"price": .50,
	"numPurchased": 0
}

var fruitsArray =[banana, apple, orange, grape];

function changePrice(fruitObj) {
	var increment = (randomNumber(1, 50)/100);

	//fruitObj.price += increment;
	var decider = randomNumber(1, 2);
	if (decider === 1) {
		fruitObj.price -= increment;
	}
	else {
		fruitObj.price += increment;
	}

	while (fruitObj.price < 0.50 || fruitObj.price > 9.99) {
		increment = randomNumber(1, 50)/100;
		if (fruitObj.price < 0.50) {
			fruitObj.price += increment;
		}
		else if (fruitObj.price > 9.99) {
			fruitObj.price -= increment;
		}
	}

	//	Other stuff

	return (fruitObj.price).toFixed(2);

}

function insertArray(ourArray) {
	for(var it=0; it<ourArray.length; it++){
		console.log(ourArray[it].name + ": " + changePrice(ourArray[it]));
	}
	return ourArray;
}
/*function fruitPrice(arrayFruit){
	for(var it=0; it<arrayFruit.length; it++){
		arrayFruit[it].price += randomNumber(0.01, .5);
			if (arrayFruit[it].price > .5 || arrayFruit[it].price < 9.99) {
				return arrayFruit[it].price;
			} else {

			}
	}
}*/

$(function() {
	console.log("Yay!");
	//insertArray(fruitsArray);

	//setInterval(insertArray(fruitsArray), 1000);
	setInterval(function() {
		var newArr = insertArray(fruitsArray);

		for (var ar = 0; ar < newArr.length; ar++) {
			console.log(newArr[ar].price);
		}
	}, 2000);

})
