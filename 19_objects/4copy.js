/**
 * COPY OF AN OBJECT (via Assignment operator)
 * copy_obj = original_obj
 * The object can have primitive or non-primitive values or both
 * Modifying the copy_obj will modify the original_array
 */

const obj = { id: '123', status: 'pass' }

let copyObj = obj

copyObj.status = 'fail'

console.log(copyObj)    // { id: '123', status: 'fail' }
console.log(obj)        // { id: '123', status: 'fail' }