let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Promise resolved', 4000);
    })
})

async function Asyncfun() {
    let result = await Promise;
    console.log(result);
    console.log("Hello");
}

Asyncfun();