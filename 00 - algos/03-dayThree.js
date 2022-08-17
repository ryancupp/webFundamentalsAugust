// var favFoods = ["Calamari", "Pho", "Pizza", "Sushi", "Steak", "tacos", "korean bbq", "chipotle"]; // elements are values in array
// //                  0           1      2        3       4       5

// //print each and every value in the array favFoods

// for(var i = 0; i <=favFoods.length; i++){
//     if(favFoods[i]== "Sushi"){
//         console.log("inflation doe for" + favFoods[i]);
//     }
//     else if(favFoods[i]== "chipotle"){
//         console.log("great deal for that " + favFoods[i]);
//     }
//     else{
//         console.log(favFoods[i]);
//     }
// }

// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";
    
// if(isSunny) {
//   whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//   whatToBring += "a coat, ";
// }
// if(isRaining) {
//   whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";
    
// console.log(whatToBring);

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    // your code here!
    for (var i= 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            countPositives ++;
        }
    }
console.log("there are " + countPositives + " positive values");