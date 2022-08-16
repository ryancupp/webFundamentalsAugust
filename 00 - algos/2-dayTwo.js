var amazing_show1 = "curb your enthusiasmis #1! yay"; //this is a variable that is equal to a string
var magicsNumber = 32;



amazing_show1 = "The Office"; // this is an example of reassigning the variable amazing_show1 to be equal to "the office"

var isRobSpeakingFactsAboutBasketball = false; // booleans are true or false 

//a data type is simple information like a string, number, boolean
// a data structure is something that can store multiple data types


//an array is a data structure where you can group multiple pieces of info together
var greatestArtists = ["Drake", "J Cole", "Kanye", "Tupac", "Beyonce", "Taylor Swift", "Lupe Fiasco"] //array of strings
                        //0         1       2       3           4              5    :indexes(positions)
var randomNums = [23, 0, 77, 12, 8,]; //array of numbers

var mixedArray = ["Potato", 5, false, true, "hello", 9]; //mixed array

//values within array are called: elements

// console.log("wazzza");
// console.log(greatestArtists);

//a loop is used to do somehting repeatedly
// print every number from 1 to 100
// for(var i = 1; i <= 100; i ++){
//     console.log(i);
// }
// for(var i = 10; i >= 1; i --){
//     console.log(i);
// }

// for(var i = 0; i < greatestArtists.length; i ++){
//     console.log(greatestArtists[i]);
// }

var a = 25;
a = a - 13; // a becomes 12
console.log(a/2); // 12/2 = 6
    
a = "hello"; // a becomes "hello"
console.log(a + " hello"); // hello hello 

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3;  //0, 4, 8, outside of loop 12
}
    
console.log("outside of the loop " + i);