class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.username = username;
        this.email = email;
        this.password = password;
    }
    addCourse (){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai","chai@gmail", "123")
chai.addCourse()
const masalachai = new User("masalaChai")
// masalachai.addCourse()  --> addcourse ka access nhi h masalachai ke pass
masalachai.logMe()

// console.log(chai === masalachai);
// console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

