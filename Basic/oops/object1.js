const user = {
    name: 'Devi Priya',
    username: 'Devi',
    password: 'password:)',

    login: function(username, password) {
        if(this.username == username && this.password == password) {
            console.log('Login successful');
        }
        else {
            console.log('Authentication failed');
        }
    }
}
user.login('Divya','password');
user.login('Devi','password:)');