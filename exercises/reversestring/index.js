// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = ""
    for (let char of str){
        reversed = char + reversed
    }
    return reversed
}

module.exports = reverse;

//let revStr = []
    // for(i=str.length-1; i >= 0; i--){
    //    revStr.push(str[i])
    // }
    // return revStr.toString().replace(/,/g , "")