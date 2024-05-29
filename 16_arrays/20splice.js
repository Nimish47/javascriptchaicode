// METHOD -splice

// used to REMOVE or REMOVE AND ADD elemets from/into an array 
// arr.splice(startIndex:op,removeCount:op,addValue1:op,addValue2:op,...)

    // startIndex: from where we want to perform operation
    // removeCount: remove elements from index = [startIndex,startIndex+removecount]
    // addValue(s): add values to array at index = startIndex (after remove operation is done)

// if no params specifed, empty array returned and original array untouched
// if only startindex present, it removes elements from array
// if startindex and removeCount present, it removes elements from array 
// // if startindex and removeCount and addValues(s) present, it removes and adds elements from/to array     
// returns an array of removed items
// modifies original array


const arr1 = ["Jan", "Feb", "Mar", "Apr"]
const arr2 = ["Jan", "Feb", "Mar", "Apr"]
const arr3 = ["Jan", "Feb", "Mar", "Apr"]
const arr4 = ["Jan", "Feb", "Mar", "Apr"]

const removedArr1 = arr1.splice()
const removedArr2 = arr2.splice(1)
const removedArr3 = arr3.splice(1,2)
const removedArr4 = arr4.splice(1,2,"Nov","Oct")

console.log(`Array1: ${arr1} | RemovedArr1: ${removedArr1}`)        // Array1: ["Jan","Feb","Mar","Apr"] | RemovedArr1: []
console.log(`Array2: ${arr2} | RemovedArr2: ${removedArr2}`)        // Array2: ["Jan"] | RemovedArr2: ["Feb","Mar","Apr"]
console.log(`Array3: ${arr3} | RemovedArr3: ${removedArr3}`)        // Array3: ["Jan","Apr"] | RemovedArr3: ["Feb","Mar"]
console.log(`Array4: ${arr4} | RemovedArr4: ${removedArr4}`)        // Array4: ["Jan","Nov","Oct","Apr"] | RemovedArr4: ["Feb","Mar"]

