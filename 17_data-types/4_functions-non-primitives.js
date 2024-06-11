// non-primitive-type-variables passed into functions


const func = (obj) => {
    obj.name = 'Kunal'
    return obj;
}

const obj = {name: 'Aniket', age: 18}
const res = func(obj)

console.log(res)        //  { name: 'Kunal', age: 18 }     
console.log(obj)        //  { name: 'Kunal', age: 18 }