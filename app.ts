var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];

// TypeScript: forof
for (let value of array) {
    console.log(`${value}`);
}

// Classic JS: forin
// for (var index in array) {
//     var value = array[index];
//     console.log(`${index}: ${value}`);
// }