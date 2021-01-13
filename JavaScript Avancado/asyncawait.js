const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000)
})

(async function () {
    console.log('Begin');
    const text = await promise
    console.log(text)
    
    console.log(await promise)

    try {
        const res = await promise
        setTimeout(() => console.log(res), 5000)
    } catch (rej){
        console.rejor(rej)
    }
    
    promise.then(
        (res) => setTimeout(() => console.log(res), 5000),
        (rej) => console.error(rej)
    )
})()
