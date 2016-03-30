
///////////// Random number generator

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}




///////////// fruit objects //////////
var banana = {
	"name": "banana",
	"price": 4.00,
	"numPurchased": 0,
	"prices": [],
	"avgPrice": 0
}

var apple = {
	"name": "apple",
	"price": 2.50,
	"numPurchased": 0,
	"prices": [], /// <-- stores the current price of the item each time
	"avgPrice": 0

}

var orange = {
	"name": "orange",
	"price": 9.50,
	"numPurchased": 0,
	"prices": [],
	"avgPrice": 0
}

var grape = {
	"name": "grape",
	"price": .50,
	"numPurchased": 0,
	"prices": [],
	"avgPrice": 0
}

var fruitsArray =[banana, apple, orange, grape];

/////////////////// change the price ////////////

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

$(function() {

	//insertArray(fruitsArray);

	//setInterval(insertArray(fruitsArray), 1000);
	setInterval(function() {
		var newArr = insertArray(fruitsArray);

		for (var ar = 0; ar < newArr.length; ar++) {
			return(newArr[ar].price);
		}
	}, 2000);



/////////////// shopping cart //////////////////
	var wallet = 100;


	function fruitAverage(buyerArr) {
		var count = 0;
		var fruitTotal = 0;
		for (var mm = 0; mm < buyerArr.length; mm++) {
			count += 1;
			fruitTotal += buyerArr[mm];
		}
		return fruitTotal/count;
	}


	$("#shop").on("click", ".buy", function() {
		var fruitName = $(this).parent().attr("id");
			for(var nn=0; nn<fruitsArray.length; nn++){
				if (fruitName === fruitsArray[nn].name){
					var price = fruitsArray[nn].price;
					var fruitNow = fruitsArray[nn];
				}
			}
			if (wallet <= 0 || (wallet < price
			)){
				alert("Sorry, but you have spent your limit!");
			} else {
				//	Push current market price to array in buyer object
				fruitNow.prices.push(price);
				//	Subtract from wallet
				wallet -= price;
				//	Append # of fruit to the DOM
				var bought = fruitNow.prices.length;
				$("#cart").append("Number of " + fruitName + " purchased: " + bought + "<br>");
				//	Calculate average
				var average = fruitAverage(fruitNow.prices);
				fruitNow.avgPrice = average;
				//	Append remaining $ to the DOM
				$("#cart").append(wallet + "<br>");
			}
		});

});
