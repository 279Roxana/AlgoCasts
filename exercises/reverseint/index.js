// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
     let num= n.toString().split("").reverse().join("")
    return parseInt(num) * Math.sign(n) 
}

module.exports = reverseInt;

// let num= n.toString().split("").reverse().join("")
//     return n < 0 ? parseInt(num) * -1 : parseInt(num) 