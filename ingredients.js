var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var repeat = 0;
while (repeat < 1) {
	console.log(ingredients);
	repeat++
}
// Write a for loop that prints out the contents of ingredients:
console.log("Stuff for cake:");
for (var i = 0; i < ingredients.length; i++) {
	console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
var length = ingredients.length
console.log("Stuff for cake:");
for (var i = ingredients.length; i > 0; i--) {
	console.log(ingredients[i]);
}
	