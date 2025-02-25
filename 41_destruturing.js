const student = {
    name: "priya",
    age: 19,
    class: "Btech CSE" ,
    subjects: ["Data Comm", "OOAD", "python", "DBMS"],
    username: "priya123@",
    password: "abcd",
}
let {username: user, password: secret, city = "Indore"} = student;
