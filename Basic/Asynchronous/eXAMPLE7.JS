let count=true;

let countValue= new Promise(function(resolve,reject) {
    resolve('Promise resolved');
})

countValue.then(function successvalue(result){
    console.log(result);
})

.then(function successvalue1(){
     console.log('Multiple then we can use');

})

.catch(function Errormsg(error) {
    console.log("Error message: "+error);
})

.finally(function greet() {
    console.log("Finally block");
})