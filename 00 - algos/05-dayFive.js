var fruit1= "apples";
var fruit2="oranges";

var temp= fruit2;
fruit2= fruit1;
fruit1= temp;
// swapping using temp variable

[fruit1, fruit2] = [fruit2, fruit1]; //destructure swap

// 

// let i=0;
// while(i<=12){
//     console.log(i);
//     i ++;
// }

// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }


let topArtists= ["nipsey", "Drake", "Lupe", "Ray Charles", "sam cooke", "Elvis", "Peppers"]

// topArtists[3]= "Jamie Fox";

// console.log(topArtists);

// var left = 0;
// var right= topArtists.length-1

// while (left<right){
//     [topArtists[left],topArtists[right] = topArtists[right],topArtists[left]];
//     left++;
//     right --;
// }

console.log(topArtists);

function reverseArray(arr){
    var left = 0;
    var right= arr.length-1

    while (left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right --;
    }

    console.log(arr);
}

reverseArray(topArtists);
