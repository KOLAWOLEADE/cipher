// Cipher function

let sentence = prompt("Write a sentence");

console.log();


// invoke function
function letter(sentence){
  let firstletter = sentence.charAt(0).toUpperCase();
  let lastletter = sentence.charAt(sentence.length -1).toUpperCase();
  let y = firstletter.concat(lastletter);
    return y;
}

 alert(letter(sentence));
 console.log(letter(sentence))
 document.write(letter(sentence))

 // invoke function on reverse
 function reverse(){
let  splitspring = y.split("")

let rev = splitspring.reverse()

let join = rev.join

return join
 }

 console.log(reverse)





// function charAT(y) {
//   return x.charAt(0).toUpperCase()
// }

// console.log(charAT(0));

// invoke function slice
// function slice(){
//   return x.slice(0).toUpperCase();
// }
// console.log(slice(0));

// invoke function substring
//  function substring(x){
//       return x.substring(0,x.length-1)  
//     }

//   console.log(substring(x));

// reverse method

// function reverse(x){
//    return reverse(x)
// }
// console.log (reverse)

