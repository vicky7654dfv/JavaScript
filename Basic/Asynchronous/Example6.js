let count=true;

let countValue= new Promise(function(resolve,reject) {
    if(count)
        resolve("<resolve> There is count value");
    else
        reject('<reject> This is error value');
})

console.log(countValue);