// Array.reduce() accepts a callback function and initial value as an input (initial value is optional). The function will be called for each element of the array with the initial value at the beginning and then with the value returned from the last call of the same function.
// The callback function has 4 parameters, (previousValue, currentValue, currentIndex, array).
// ● previousValue – The value returned from the last call of the same function or the initial value at the beginning.
// ● currentValue – Current value of the array.
// ● currentIndex – Current index position of the iteration.
// ● array – The array itself.


var foo = [{a:1},{b:2},{c:3}];

const sum = foo.reduce((prev, curr, index)=>{
    return prev += Object.values(curr)[0];
}, 0);

console.log(sum);