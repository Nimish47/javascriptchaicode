/*
* DYNAMICALLY PICK KEY NAME FROM VARIABLE
* {[variableName: value]} 
* ex- variableName is calculated dynamically based on result of say, a function  
*/

let sports = 'cricket';  // 

let obj = {name: 'Anshu', [sports]: 'ESPN'}

console.log(obj)        // { name: 'Anshu', cricket: 'ESPN' }

