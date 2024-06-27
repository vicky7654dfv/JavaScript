class User {
    #mark1; #mark2; #mark3;

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
        this.#mark1 = mark1;
        this.#mark2 = mark2;
        this.#mark3 = mark3;
    }

    getMarks() {
        console.log(mark1: ${this.#mark1}\nmark2: ${this.#mark2}\nmark3: ${this.#mark3});
    }

    totalMarks() {
        return this.#mark1 + this.#mark2 + this.#mark3;
    }

    average() {
        return this.totalMarks() / 3;
    }

    grade(average) {
        switch (average) {
            case (average > 85):
                console.log('grade O');
                break;
            case (average > 75):
                console.log('grade A');
                break;
            case (average > 65):
                console.log('grade B');
                break;
            case (average > 55):
                console.log('grade C');
                break;
            case (average >= 45):
                console.log('grade D');
                break;
            case (average >= 45):
                console.log('grade E');
                break;
            case (average < 45):
                console.log('try better');
                break;
        
            default:
                console.log('default');
                break;
        }
    }
}

const student1 = new User();
student1.signUp('student1', 'stud1', 'stud123');
student1.login('stud1', 'stud123');
student1.setMarks(45, 45, 45);
student1.getMarks();
console.log(student1.totalMarks());
console.log(student1.average());
student1.grade(student1.average());

const student2 = new User();
student2.signUp('student2', 'stud2', 'stud321');
student2.login('stud2', 'stud321');
student2.setMarks(45, 55, 65);
student2.getMarks();
console.log(student2.totalMarks());
console.log(student2.average());
student2.grade(student2.average());         