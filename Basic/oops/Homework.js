class User {

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    signUp(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;

        console.log("registered successfully....");
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("login successful");
        } else {
            if (this.email !== email) {
                console.log("please! enter a valid email.__. " + this.email + " " + email);
            } else {
                console.log("entered password is incorrect");
            }
        }
    }

    setMarks(mark1, mark2, mark3) {
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
    }

    getMarks() {
        console.log(mark1: ${this.mark1}\nmark2: ${this.mark2}\nmark3: ${this.mark3});
    }

    totalMarks() {
        return this.mark1 + this.mark2 + this.mark3;
    }

}

const student1 = new User('hhh', 'h3', 'hh3h');
student1.signUp('hhh', 'h3', 'hh3h');
student1.login('h3', 'hh3h');
student1.setMarks(34, 33, 43);
student1.getMarks();
console.log(total mark of student1: ${student1.totalMarks()});