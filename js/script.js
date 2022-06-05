$(document).ready(function(){
    $(".sen").click(function(){
        alert("sentence")
    })


    $(".enc").click(function(){
        alert("newsentence")
    })

});


//$(document).ready(function(){
//     $(".original").click(function(){
//         alert("sentence");

//     });

//     $(".encoded").click(function(){
//         alert("newsentence");
//     });


// });

   






// Cipher function

const sentence = prompt("Write a sentence");

console.log(sentence);

// To get the firstletter in a sentence
let firstLetter = sentence.charAt(0).toUpperCase();

// to get the lastletter
let lastLetter = sentence.charAt(sentence.length -1).toUpperCase();

// To concat first and last letter

let firstAndLast = firstLetter.concat(lastLetter);


// create  function to take the first letter and the last letter and return as a string in uppercase
function firstAndLastLetter(){

return firstAndLast;
  
}
// involke my function

 alert(firstAndLastLetter());
 console.log(firstAndLastLetter());
 document.write(firstAndLastLetter());

 // function to reverse the order of my first and last letter
 
 function reverseFirstAndLast(str){
 // Step 1 use the split() method to return new array
 let splitSpring = str.split("");


 // Step 2 use the reverse() method to reverse the new created array

 let reverseArray = splitSpring.reverse();

 // Step 3 use the join () method to join() method to join all elements of the array into a string

 let joinArray = reverseArray.join("");

 // Step 4 Return the reversed string 

 return joinArray;
 }
// calling my function with alert

alert(reverseFirstAndLast(firstAndLast));
console.log(reverseFirstAndLast(firstAndLast));
document.write(reverseFirstAndLast(firstAndLast));

// function that call on other two function

function thirdFunction(){
 let  firstFunction = firstAndLastLetter();
 let  secondFunction = reverseFirstAndLast(firstAndLast);
 let twoLetterstring = sentence.concat(secondFunction);
 return twoLetterstring;
}
alert(thirdFunction());
console.log(thirdFunction());
document.write(thirdFunction());

// counting original sentence

function newsentence(){
    let counting = Math.floor(sentence.length/2);
    let y = sentence.charAt(counting);
    let newsentence = y + " " + sentence


    return newsentence;
}

alert(newsentence());
console.log(newsentence());
document.write(newsentence());

// Bonus reverse function

function reverseNewSentence(newsentence){
// spliting before reverse

let A = newsentence.split("");

// taking the reverse of the splited sentence

let rever = A.reverse();

// joining the splited sentence and output it as reverse

let binding = rever.join("");

return binding;


}

alert(reverseNewSentence());
console.log(reverseNewSentence());
document.write(reverseNewSentence())

// let reve = newsentence.reverse()



//  // invoke function on reverse
//  function reverse(){
// let  splitspring = y.split("")

// let rev = splitspring.reverse()

// let join = rev.join

// return join
//  }

//  console.log(reverse)





// // function charAT(y) {
// //   return x.charAt(0).toUpperCase()
// // }

// // console.log(charAT(0));

// // invoke function slice
// // function slice(){
// //   return x.slice(0).toUpperCase();
// // }
// // console.log(slice(0));

// // invoke function substring
// //  function substring(x){
// //       return x.substring(0,x.length-1)  
// //     }

// //   console.log(substring(x));

// // reverse method

// // function reverse(x){
// //    return reverse(x)
// // }
// // console.log (reverse)

