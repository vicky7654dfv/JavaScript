async function f() {
    console.log('Async function')
    return Promise.resolve(1);
}

f()
.then(function(result) {
    console.log(result)
})