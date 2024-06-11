/**
 * NAMING OF KEYS IN JAVASCRIPT
 * for multi word key-names, make sure to wrap them in quotes (otherwise throws error)
 * for single worded key-names, need not wrap them. JS behind the scenes converts such key-names to strings
 * to access a multi-word keyname, we need to use [] bracket notation and not (.) notation
 *  */ 


//  throws error
// const obj = {
//     first name: "Nishant",
//     age: 18
// }

const obj = {
    'first name': 'Nishant',
    age: 18
}

// to access need to use [] and not .
// console.log(obj.first name)         // throws error
console.log(obj['first name'])         // Nishant