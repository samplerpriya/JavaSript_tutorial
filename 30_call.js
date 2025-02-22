function SetUsername(username) {
    // Complex database calls

    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername.call(username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb123","123")
console.log(chai);

