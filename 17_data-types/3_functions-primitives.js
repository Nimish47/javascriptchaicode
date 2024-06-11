// Primitive-type-variables passed into functions


const func = (num) => {
    num = 10;
    return num;
}

const num = 5;
const res = func(num)

console.log(res)        // 10        
console.log(num)        // 5