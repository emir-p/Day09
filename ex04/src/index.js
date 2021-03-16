// Only change code below this line
function comapreDifferentValues(m, n) {
    if(m === n) {
        return "Equal";
    }
    return "Not equal";
}

console.log(comapreDifferentValues("8", 8));
console.log(comapreDifferentValues('8', 8));
console.log(comapreDifferentValues("8", "8"));
console.log(comapreDifferentValues(8, 8));

// Only change code above this line
module.exports = comapreDifferentValues;