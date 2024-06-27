class Abstract {
    name;
    email;
    #password;

    constructor() {}

    #validateEmail(email) {
        return true;
    }

    #validatePassword(password) {
        return true
    }

    signUp(name, email, password) {
        let isValidate = false;

        isValidate = this.#validateEmail(email);
        isValidate &&= this.#validatePassword(password);

        if (isValidate) {
            this.name = name;
            this.email = email;
            this.#password = password;;
            console.log("Registerd Successfully");
        } else {
            console.log("Please enter correct details!!!!.......");
        }
    }

    login(email, password){
        if(email == this.email && password == this.#password) {
            console.log("login successful");
        }
        else{
            console.log("Authentication failed");
        }
    }
}

const person = new Abstract();
person.signUp('Manisha', 'manish@gmail.com', 'password');

person.login('manish@gmail.com','password');

person.signUp('Jasmine', 'jasmine@gmail.com',12);
person.signUp('jasmine@gmail.com', 'jas');