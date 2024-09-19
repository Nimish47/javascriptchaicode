// async operation in a FOR loop

const fetchData = (data) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(data.toUpperCase())
    }, 2000)
})

const api = async () => {
    console.log('Start!')
    const arr = ['apple', 'banana', 'oranges']
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        const response = await fetchData(arr[i])
        console.log(response)
        res.push(response)
    }
    console.log(res)
    console.log('End!')
}

api()

// Start!
// APPLE
// BANANA
// ORANGES
// [ 'APPLE', 'BANANA', 'ORANGES' ]
// End!