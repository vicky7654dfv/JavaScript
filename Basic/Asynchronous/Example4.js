function greet(name, callback) {
    console.log('Hello world ' +name);
    callback();
}


function callMe() {
    console.log("Callback function working");
}

greet('john',callMe);