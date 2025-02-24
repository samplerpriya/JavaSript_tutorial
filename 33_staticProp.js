class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){ 
        return `123`
    }
}

const priya = new User("priya")
// console.log(priya.createId());


class Teacher extends User{
    constructor (email){
        super(this.username)
        this.email = email
    }
}

const iphone = new Teacher("ipone", "i2gmail.com")
console.log(iphone.logMe())